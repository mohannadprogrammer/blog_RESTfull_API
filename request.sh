# curl -X POST http://localhost:3000/posts  -H "Content-Type: application/json" -d ' {"content":"Test ls;df;ls" , "imageUrl":"" , "catogryId" : 1 }'

# curl -X PUT http://localhost:3000/posts/2   -H "Content-Type: application/json" -d ' { "title":"Updated Title " , "content":"Updated Body" , "imageUrl":"" , "catogryId" : 1 }'
# curl -X POST http://localhost:3000/user/signup  -H "Content-Type: application/json" -d ' {"email":"m00@g.com" , "password":"123" , "name" : "waheed mohannad" }'
curl -X POST http://localhost:3000/user/login  -H "Content-Type: application/json" -d ' {"email":"m00@g.com" , "password":"123"  }'
