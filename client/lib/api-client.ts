/**
 * API Client for AI Academy Platform
 * Handles all backend communication with automatic token management
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  /**
   * Get stored access token
   */
  private getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  /**
   * Get stored refresh token
   */
  private getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  /**
   * Store tokens
   */
  private setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  /**
   * Clear tokens
   */
  private clearTokens(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  /**
   * Make HTTP request with automatic token refresh
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<APIResponse<T>> {
    const token = this.getAccessToken();
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers,
      });

      // If 401 and we have a refresh token, try to refresh
      if (response.status === 401 && this.getRefreshToken()) {
        const refreshed = await this.refreshAccessToken();
        if (refreshed) {
          // Retry original request with new token
          const newToken = this.getAccessToken();
          headers['Authorization'] = `Bearer ${newToken}`;
          const retryResponse = await fetch(`${this.baseURL}${endpoint}`, {
            ...options,
            headers,
          });
          return retryResponse.json();
        } else {
          // Refresh failed, clear tokens and redirect to login
          this.clearTokens();
          window.location.href = '/student-login';
          throw new Error('Session expired');
        }
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  }

  /**
   * Refresh access token
   */
  private async refreshAccessToken(): Promise<boolean> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) return false;

    try {
      const response = await fetch(`${this.baseURL}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data.accessToken) {
          localStorage.setItem('accessToken', data.data.accessToken);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('Token refresh error:', error);
      return false;
    }
  }

  // ============================================
  // AUTHENTICATION ENDPOINTS
  // ============================================

  /**
   * Register a new user
   */
  async register(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: 'student' | 'parent';
    dateOfBirth?: string;
    parentEmail?: string;
    phoneNumber?: string;
  }): Promise<APIResponse> {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (response.success && response.data?.tokens) {
      this.setTokens(
        response.data.tokens.accessToken,
        response.data.tokens.refreshToken
      );
    }

    return response;
  }

  /**
   * Login user
   */
  async login(email: string, password: string): Promise<APIResponse> {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.success && response.data?.tokens) {
      this.setTokens(
        response.data.tokens.accessToken,
        response.data.tokens.refreshToken
      );
    }

    return response;
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    this.clearTokens();
    window.location.href = '/student-login';
  }

  /**
   * Get current user
   */
  async getCurrentUser(): Promise<APIResponse> {
    return this.request('/auth/me');
  }

  // ============================================
  // STUDENT ENDPOINTS
  // ============================================

  /**
   * Get student dashboard
   */
  async getStudentDashboard(): Promise<APIResponse> {
    return this.request('/students/dashboard');
  }

  /**
   * Get student projects
   */
  async getStudentProjects(params?: { status?: string }): Promise<APIResponse> {
    const query = params ? `?${new URLSearchParams(params as any)}` : '';
    return this.request(`/students/projects${query}`);
  }

  /**
   * Submit project
   */
  async submitProject(
    projectId: string,
    data: {
      submissionFiles?: string[];
      submissionText?: string;
      studentNotes?: string;
    }
  ): Promise<APIResponse> {
    return this.request(`/students/projects/${projectId}/submit`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Get student progress
   */
  async getStudentProgress(): Promise<APIResponse> {
    return this.request('/students/progress');
  }

  /**
   * Get student achievements
   */
  async getStudentAchievements(): Promise<APIResponse> {
    return this.request('/students/achievements');
  }

  /**
   * Get student rewards
   */
  async getStudentRewards(): Promise<APIResponse> {
    return this.request('/students/rewards');
  }

  // ============================================
  // PARENT ENDPOINTS
  // ============================================

  /**
   * Get parent dashboard
   */
  async getParentDashboard(studentId?: string): Promise<APIResponse> {
    const query = studentId ? `?studentId=${studentId}` : '';
    return this.request(`/parents/dashboard${query}`);
  }

  /**
   * Get all children
   */
  async getParentChildren(): Promise<APIResponse> {
    return this.request('/parents/children');
  }

  /**
   * Get child progress
   */
  async getChildProgress(studentId: string): Promise<APIResponse> {
    return this.request(`/parents/progress/${studentId}`);
  }
}

// Export singleton instance
export const apiClient = new APIClient(API_BASE_URL);
export default apiClient;
