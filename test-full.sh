#!/bin/bash

echo "🧪 Full API Test - AI Academy Platform"
echo "========================================"
echo ""

# Test 1: Register new student
echo "1️⃣  Registering new student (alice@student.com)..."
curl -s -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@student.com","password":"Test1234!","firstName":"Alice","lastName":"Smith","role":"student","dateOfBirth":"2009-05-15"}' | jq .
echo ""

# Test 2: Login
echo "2️⃣  Logging in as alice@student.com..."
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@student.com","password":"Test1234!"}')
echo "$LOGIN_RESPONSE" | jq .

ACCESS_TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.data.tokens.accessToken')
echo ""

# Test 3: Get current user
echo "3️⃣  Getting current user..."
curl -s http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .
echo ""

# Test 4: Student dashboard
echo "4️⃣  Getting student dashboard..."
curl -s http://localhost:3000/api/students/dashboard \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .
echo ""

# Test 5: Student projects
echo "5️⃣  Getting student projects..."
curl -s http://localhost:3000/api/students/projects \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .
echo ""

echo "✅ All tests complete!"
