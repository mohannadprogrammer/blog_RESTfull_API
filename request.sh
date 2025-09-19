# curl -X POST http://localhost:3000/posts  -H "Content-Type: application/json" -d ' { "title":"Test Title " , "content":"Test ls;df;ls" , "imageUrl":"" , "catogryId" : 1 }'

curl -X PUT http://localhost:3000/posts/2   -H "Content-Type: application/json" -d ' { "title":"Updated Title " , "content":"Updated Body" , "imageUrl":"" , "catogryId" : 1 }'