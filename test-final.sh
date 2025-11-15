#!/bin/bash

echo "🎯 Final Backend Test - AI Academy Platform"
echo "============================================"
echo ""

# Test with a brand new user
EMAIL="bob@student.com"
PASSWORD="Test1234!"

echo "1️⃣  Registering new student ($EMAIL)..."
REG_RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\",\"firstName\":\"Bob\",\"lastName\":\"Johnson\",\"role\":\"student\",\"dateOfBirth\":\"2010-03-20\"}")
echo "$REG_RESPONSE" | jq .

if echo "$REG_RESPONSE" | jq -e '.success' > /dev/null; then
  echo "✅ Registration successful!"
  ACCESS_TOKEN=$(echo "$REG_RESPONSE" | jq -r '.data.tokens.accessToken')
else
  echo "❌ Registration failed, trying to login instead..."
  LOGIN_RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/login \
    -H "Content-Type: application/json" \
    -d "{\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\"}")
  ACCESS_TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.data.tokens.accessToken')
fi
echo ""

echo "2️⃣  Getting student dashboard..."
curl -s http://localhost:3000/api/students/dashboard \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .
echo ""

echo "3️⃣  Getting student progress..."
curl -s http://localhost:3000/api/students/progress \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .
echo ""

echo "4️⃣  Getting student achievements..."
curl -s http://localhost:3000/api/students/achievements \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .
echo ""

echo "✅ All tests complete!"
