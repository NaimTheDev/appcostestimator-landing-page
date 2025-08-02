#!/bin/bash

# Simple test script for beta signup API
# Run this to verify the backend API is working

echo "Testing Beta Signup API..."
echo "=========================="

# Test health endpoint
echo "1. Testing health endpoint..."
HEALTH_RESPONSE=$(curl -s -X GET http://localhost:3001/api/health)
if echo "$HEALTH_RESPONSE" | grep -q "OK"; then
  echo "✅ Health endpoint working"
else
  echo "❌ Health endpoint failed"
  echo "Response: $HEALTH_RESPONSE"
fi

# Test beta signup with valid email
echo ""
echo "2. Testing beta signup with valid email..."
BETA_RESPONSE=$(curl -s -X POST http://localhost:3001/api/join-beta \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}')

if echo "$BETA_RESPONSE" | grep -q "success"; then
  echo "✅ Beta signup endpoint accepting requests"
else
  echo "❌ Beta signup endpoint failed"
fi
echo "Response: $BETA_RESPONSE"

# Test beta signup with invalid email
echo ""
echo "3. Testing beta signup with invalid email..."
INVALID_RESPONSE=$(curl -s -X POST http://localhost:3001/api/join-beta \
  -H "Content-Type: application/json" \
  -d '{"email":"invalid-email"}')

if echo "$INVALID_RESPONSE" | grep -q "valid email"; then
  echo "✅ Email validation working"
else
  echo "❌ Email validation failed"
fi
echo "Response: $INVALID_RESPONSE"

echo ""
echo "Test completed!"
echo ""
echo "Note: Email sending will fail without a valid SendGrid API key,"
echo "but the API structure and validation should work correctly."