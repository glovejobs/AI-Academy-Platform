#!/bin/bash

echo "🧪 Testing AI Academy Platform API"
echo "===================================="
echo ""

# Test 1: Health Check
echo "1️⃣  Testing Health Check..."
curl -s http://localhost:3000/api/ping | jq .
echo ""

# Test 2: Register Student
echo "2️⃣  Testing Student Registration..."
curl -s -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@student.com","password":"Test1234!","firstName":"Test","lastName":"Student","role":"student","dateOfBirth":"2008-01-01"}' | jq .
echo ""

# Test 3: Login
echo "3️⃣  Testing Login..."
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@student.com","password":"Test1234!"}')
echo "$LOGIN_RESPONSE" | jq .

# Extract access token
ACCESS_TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.data.tokens.accessToken')
echo ""

# Test 4: Get Current User
echo "4️⃣  Testing Get Current User..."
curl -s http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .
echo ""

# Test 5: Get Student Dashboard
echo "5️⃣  Testing Student Dashboard..."
curl -s http://localhost:3000/api/students/dashboard \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .
echo ""

echo "✅ All tests complete!"
