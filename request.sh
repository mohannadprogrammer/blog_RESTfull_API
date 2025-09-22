# curl -X POST http://localhost:3000/posts  -H "Content-Type: application/json" -d ' {"content":"Test ls;df;ls" , "imageUrl":"" , "catogryId" : 1 }'

# curl -X PUT http://localhost:3000/posts/2   -H "Content-Type: application/json" -d ' { "title":"Updated Title " , "content":"Updated Body" , "imageUrl":"" , "catogryId" : 1 }'
# curl -X POST http://localhost:3000/user/signup  -H "Content-Type: application/json" -d ' {"email":"m00@g.com" , "password":"123" , "name" : "waheed mohannad" }'
# curl -X POST http://localhost:3000/user/login  -H "Content-Type: application/json" -d ' {"email":"m00@g.com" , "password":"123"  }'
# posting comment 

# curl -X POST http://localhost:3000/comment  -H "Content-Type: application/json" -d \
# ' {"content":"Test ls;df;ls" , "postId":3 , "userId" : 1}'

#geting all comments 
# curl -X GET http://localhost:3000/comment -H "Content-Type: application/json" 

# test catogry creation 
# curl -X POST http://localhost:3000/catogry  -H "Content-Type: application/json" -d \
# ' {"name":"javascript" }'
#test catogry listing \
# curl -X GET http://localhost:3000/catogry  -H "Content-Type: application/json"
#update catogry 
# curl -X PUT http://localhost:3000/catogry/2  -H "Content-Type: application/json" -d \
# ' {"name":"React js " }'
#delete catogry
curl -X DELETE http://localhost:3000/catogry/4  -H "Content-Type: application/json"
