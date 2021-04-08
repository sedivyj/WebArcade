{"createdAt":"2021-03-18T20:59:30.125Z","version":"15.0.7","kind":"ARC#ProjectExport","requests":[{"updated":1612552200608,"created":1612117633261,"headers":"Content-Type: application/json\ncontent-length: 76","method":"POST","payload":"{\"affectID\":\"6011af4d55616657708f8d6d\", \"userID\":\"5ff742f09bb9905f98eb348e\", \"isPrivate\":true}","url":"https://localhost:3000/test/insertAffectHistoryEntry","type":"saved","timeLabel":"12:27:13 PM","dayTime":1612072800000,"today":true,"hasHeader":true,"header":"Today","name":"test insert affect history entry","description":" test affectController's function insertAffectHistoryEntry (affectID, relatedID, isUser)\n takes an affectID, and either a teamID or a userID, but not both and exactly one.","projects":["e37f1a8d-29ed-4dc9-89db-399940b46187"],"auth":null,"authType":null,"kind":"ARC#RequestData","key":"0b0b972b-3ab4-4ccb-b988-afbd287af262"},{"url":"https://localhost:3000/oz/emeraldCity.html","method":"GET","auth":null,"authType":null,"name":"emerald city home page","description":"After logging in or with an active cookie, this page comes up with this url.","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6"],"type":"saved","updated":1610482996429,"created":1610482996429,"headers":"","payload":"","kind":"ARC#RequestData","key":"10673309-3d62-4500-a62d-de9a68d51f2e"},{"url":"https://localhost:3000/data/user/5ff742f09bb9905f98eb348e","method":"GET","auth":null,"authType":null,"headers":"Authorization: digest eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmY3NDJmMDliYjk5MDVmOThlYjM0OGYiLCJlbWFpbCI6ImFueXdoZXJlQGVtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkpvZSIsImxhc3ROYW1lIjoiQW55Ym9keSIsInVzZXJUeXBlIjoiYWRtaW4iLCJtZXRhIjoie30iLCJpYXQiOjE2MTAzMDc1MjAsImV4cCI6MTYxMjg5OTUyMCwiYXVkIjoiYW55d2hlcmVAZW1haWwuY29tIiwiaXNzIjoiS2FydW5hIiwic3ViIjoiYXV0aG9yaXphdGlvbiJ9.g9LQygRhMf7XxVIYrUR7QSng8K28NzuYfQ25ZqGE2TU","name":"User Basic Details","description":"Request basic user details\n- Requires valid JWT and matching ID or 'admin' status\n- UserID must be in URL\n- Returns basic user info as JSON on success\n- Return { error: true } and message on error or if doesn't exist","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","aa9f3b52-e00c-4afe-b242-f711837314e8"],"type":"saved","updated":1610483590503,"created":1610315788677,"payload":"","kind":"ARC#RequestData","key":"19879d14-11d0-43bc-8019-a408f1ad594c"},{"updated":1610315675709,"created":1610310774563,"headers":"Authorization: digest eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmY3NDJmMDliYjk5MDVmOThlYjM0OGYiLCJlbWFpbCI6ImFueXdoZXJlQGVtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkpvZSIsImxhc3ROYW1lIjoiQW55Ym9keSIsInVzZXJUeXBlIjoiYWRtaW4iLCJtZXRhIjoie30iLCJpYXQiOjE2MTAzMDc1MjAsImV4cCI6MTYxMjg5OTUyMCwiYXVkIjoiYW55d2hlcmVAZW1haWwuY29tIiwiaXNzIjoiS2FydW5hIiwic3ViIjoiYXV0aG9yaXphdGlvbiJ9.g9LQygRhMf7XxVIYrUR7QSng8K28NzuYfQ25ZqGE2TU","method":"GET","url":"https://localhost:3000/data/user/5ff742f09bb9905f98eb348e","type":"saved","auth":null,"authType":null,"name":"User Details","description":"Get details for a specific user\n- Include userID in the URL\n- Returns { error: true } and message if user not found or error\n- Return basic user details as JSON on success\n","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6"],"payload":"","kind":"ARC#RequestData","key":"219b6a6a-e4ba-47d1-ba38-35a6bc746929"},{"updated":1611352138680,"created":1610398282592,"headers":"Content-Type: application/json","method":"DELETE","url":"https://localhost:3000/test/removeAffect","auth":null,"authType":null,"description":"This request tests the affectController's function removeAffect (affectID)","payload":"{\"affectID\":\"600b466ff7853f6b0ca7b5db\"}","name":"test remove Affect","projects":["e37f1a8d-29ed-4dc9-89db-399940b46187"],"type":"saved","kind":"ARC#RequestData","key":"22e7a4ce-a209-42b0-b681-e0c5ee660802"},{"url":"http://localhost:8080/game/getGame/1","method":"GET","auth":null,"authType":null,"name":"getGame","description":"","projects":["712ef4f4-63c0-4bcc-8f83-17e63f2d3269"],"type":"saved","updated":1614896737203,"created":1614878087587,"kind":"ARC#RequestData","key":"26bb2ad9-9e82-4649-838a-b091b7cf3a03"},{"updated":1612119097523,"created":1611187189205,"headers":"Content-Type: application/json\ncontent-length: 74","method":"POST","payload":"{\"message\":\"this is a test\",\"correspondentID\": \"5ffcd963393406469c8a33f0\", \"userID\":\"5ffcd963393406469c8a33f0\"}","url":"https://localhost:3000/test/logUserMessage","auth":null,"authType":null,"description":"test logController's logUserMessage (message, correspondentID, userID)\nfails if it does not recieve a message or a userID, but does not need correspondentID","name":"test log user message","projects":["9206c677-6508-4601-8d5d-26dd4b9a6814"],"type":"saved","kind":"ARC#RequestData","key":"274ca0f0-a5a3-47e9-97eb-50f510a38394"},{"updated":1611353801108,"created":1610398282592,"headers":"","method":"GET","url":"https://localhost:3000/test/listAffects/","auth":null,"authType":null,"description":"This request tests the affectController's function listAffects (IDsOnly = true, perPage = 25, page = 1, sortBy = '', sortOrder = 1, filterBy = '', filter = '')","payload":"","name":"test list affects","projects":["e37f1a8d-29ed-4dc9-89db-399940b46187"],"type":"saved","kind":"ARC#RequestData","key":"276ec3d1-240c-4d66-b980-13cabcb627f2"},{"url":"https://localhost:3000/test/getUserCount","method":"GET","auth":null,"authType":null,"headers":"Authorization: digest eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmY3NDJmMDliYjk5MDVmOThlYjM0OGYiLCJlbWFpbCI6ImFueXdoZXJlQGVtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkpvZSIsImxhc3ROYW1lIjoiQW55Ym9keSIsInVzZXJUeXBlIjoiYWRtaW4iLCJtZXRhIjoie30iLCJpYXQiOjE2MTAzMDc1MjAsImV4cCI6MTYxMjg5OTUyMCwiYXVkIjoiYW55d2hlcmVAZW1haWwuY29tIiwiaXNzIjoiS2FydW5hIiwic3ViIjoiYXV0aG9yaXphdGlvbiJ9.g9LQygRhMf7XxVIYrUR7QSng8K28NzuYfQ25ZqGE2TU","description":"Request user count, does not require any information, uses a get","updated":1611347601787,"created":1610315788677,"payload":"","name":"test get user count","projects":["aa9f3b52-e00c-4afe-b242-f711837314e8"],"type":"saved","kind":"ARC#RequestData","key":"28bd1d21-d70e-40b5-98ad-a078477a23e9"},{"updated":1612122077989,"created":1610398282592,"headers":"Content-Type: application/json","method":"POST","url":"https://localhost:3000/test/createAffect","auth":null,"authType":null,"description":"This request tests the affectController's function function createAffect (affectName, description, characterCodes, relatedIDs)","payload":"{\"affectName\":\"test love\", \"characterCodes\": [\"🤩\"], \"relatedIDs\":[\"600b3fcb141bda69386ff39b\",\"6008928508baff43187a750e\"]}","name":"test create affect","projects":["e37f1a8d-29ed-4dc9-89db-399940b46187"],"type":"saved","kind":"ARC#RequestData","key":"2ba60c6a-f6f8-404a-b91a-075c431c5737"},{"updated":1612127663733,"created":1610398282592,"headers":"Content-Type: application/json","method":"DELETE","url":"https://localhost:3000/test/removeAffectHistoryEntry","auth":null,"authType":null,"description":"This request tests the affectController's function function removeAffectHistoryEntry (affectLogID, dateRange)\nunction to remove a specific affect history entry\n * function to prune affect history for a specific user/team ID in a certain date range\n * will be given either, but not both nor neither, affectLogID or dateRange","payload":"{\"dateRange\":[\"2021-01-31T18:12:16.629Z\",\"2021-01-31T18:27:13.059Z\"]}","name":"test remove affect history entry","projects":["e37f1a8d-29ed-4dc9-89db-399940b46187"],"type":"saved","kind":"ARC#RequestData","key":"2e4ad68d-f043-4df8-a27c-c24468bc5488"},{"url":"http://192.168.56.102/CS404/Module1-4/displayData.php?id=10","method":"GET","auth":null,"authType":null,"name":"display data module 1-4","description":"","projects":["17cdf28b-f8f3-4cd7-b8db-340db5629d2c"],"type":"saved","updated":1614874465803,"created":1614874465803,"kind":"ARC#RequestData","key":"325a11e0-6c22-4743-9d34-ee8c929f7606"},{"url":"http://localhost:8080/score/submitScore","method":"POST","auth":null,"authType":null,"payload":"{\"scoreid\":1500, \"gameid\":1, \"score\":4000, \"initial\":\"LMF\"}","headers":"Content-Type: application/json","name":"submitScore","description":"takes a json object in the body with a new score.","projects":["712ef4f4-63c0-4bcc-8f83-17e63f2d3269"],"type":"saved","updated":1616090685752,"created":1616090685752,"kind":"ARC#RequestData","key":"332a5863-9dd0-4ce3-a05b-af70e32c63e1"},{"updated":1611353143477,"created":1610398282592,"headers":"Content-Type: application/json","method":"POST","url":"https://localhost:3000/test/updateAffect","auth":null,"authType":null,"description":"This request tests the affectController's function updateAffect (affectID, newData)","payload":"{\"affectID\":\"600b4b192fdec5204804c4dc\",\"newData\":{\"affectName\":\"test changed\", \"characterCodes\": [\"🥰\"]}}","name":"test update affect","projects":["e37f1a8d-29ed-4dc9-89db-399940b46187"],"type":"saved","kind":"ARC#RequestData","key":"37ca8f14-98e1-41b7-a928-1af621ad3dd1"},{"url":"https://localhost:3000/test/registerOrg","method":"POST","auth":null,"authType":null,"payload":"{\"unitName\":\"Larissa's Org\", \"description\": \"The most awesome organization\"}","headers":"Content-Type: application/json","name":"Test registering an Organization","description":"tests teamController's createOrgUnit function.","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","fa950d73-93f0-4134-91db-b63db2a996e1"],"type":"saved","updated":1610483876857,"created":1610409539560,"kind":"ARC#RequestData","key":"38a71461-ad53-40f2-bbdb-6f6e01291e1c"},{"url":"http://localhost:8080/test/testdbAPI/1","method":"GET","auth":null,"authType":null,"name":"testdbAPI","description":"gets Game given gameid","projects":["712ef4f4-63c0-4bcc-8f83-17e63f2d3269"],"type":"saved","updated":1616090921996,"created":1616090921996,"kind":"ARC#RequestData","key":"397e09ca-37c8-41c1-a1ea-a87a673cea88"},{"updated":1610484188819,"created":1610399521852,"headers":"Content-Type: application/json\ncontent-length: 95","method":"POST","payload":"{\"email\":\"anywhere@email.com\", \"firstName\":\"Larissa\", \"lastName\":\"Ford\", \"password\":\"password\"}","url":"https://localhost:3000/auth/login","type":"saved","auth":null,"authType":null,"name":"test Login","description":"Tests the authControllers validateUser function from auth.js","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","27b24e89-0cfb-4ad8-b9bf-498e08cf8304"],"kind":"ARC#RequestData","key":"3d2a5663-d555-4f64-8fea-97405466cf0e"},{"updated":1611084152017,"created":1610398282592,"headers":"","method":"GET","url":"https://localhost:3000/test/getOrgUnitDetails/5ffdf189766fc561704c21bb","auth":null,"authType":null,"description":"This tests the getOrgUnitDetails from the unitController. \nIt takes a unitID from the url.","payload":"","name":"test get org unit details","projects":["fa950d73-93f0-4134-91db-b63db2a996e1"],"type":"saved","kind":"ARC#RequestData","key":"3e022bd2-d436-416b-bf10-a2d9ec8f4244"},{"url":"http://localhost:8080/score/getHighScore/1","method":"GET","auth":null,"authType":null,"name":"getHighScore","description":"","projects":["712ef4f4-63c0-4bcc-8f83-17e63f2d3269"],"type":"saved","updated":1614899184182,"created":1614878150941,"kind":"ARC#RequestData","key":"4afb82b1-6684-467a-a597-8619a2a94fb2"},{"updated":1611080582358,"created":1610401929415,"headers":"Content-Type: application/json\ncontent-length: 95\nAuthorization: digest eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjc0MmYwOWJiOTkwNWY5OGViMzQ4ZiIsImVtYWlsIjoiYW55d2hlcmVAZW1haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9lIiwibGFzdE5hbWUiOiJBbnlib2R5IiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTYxMDMxMzMxMywiZXhwIjoxNjEyOTA1MzEzLCJhdWQiOiJhbnl3aGVyZUBlbWFpbC5jb20iLCJpc3MiOiJLYXJ1bmEiLCJzdWIiOiJhdXRob3JpemF0aW9uIn0.7uL7FBTY-Fp97fHSMMt3UnUS7kNQwQQTU98fHVCI-6M","method":"POST","payload":"{\"id\":\"600721df558a140b68df5e4d\"}","url":"https://localhost:3000/data/team/update","auth":null,"authType":null,"description":"uses teamController's getTeamDetails function for current user details.\nuses teamController's updateTeam function for updating current team's details.\n\nrequires admin authorization in header and valid teamID.","name":"team update","projects":["ed64b06a-3895-4cb0-a38d-dadea444d4fe"],"type":"saved","kind":"ARC#RequestData","key":"53131f73-6d89-4e53-9646-194b617c4e28"},{"updated":1612815150497,"created":1610398282592,"headers":"","method":"GET","url":"https://localhost:3000/test/listAffectHistory/affectLogID/6017210acec9ee3da845de66/dateStart/2021-01-31T21:28:42.887Z/dateEnd/6018436dbc5a6857dc345726","auth":null,"authType":null,"description":"This request tests the affectController's function listAffectHistory (affectLogID, dateStart, dateEnd)\n- this is a function to retrieve affect history with support to filter by date range and user/team ID\n- given both an ID and dates, it will choose to find the one with the ID\n- given an end date, it will find timestamps before that date\n- given a start date, it will find timestamps after that date","payload":"{\"dateRange\":[\"2021-01-31T18:12:16.629Z\",\"2021-01-31T18:27:13.059Z\"]}","name":"test list affect history given two timestamps","projects":["e37f1a8d-29ed-4dc9-89db-399940b46187"],"type":"saved","kind":"ARC#RequestData","key":"568aa430-7d5c-415e-882c-e14a81cf5ed5"},{"url":"https://localhost:3000/test/updateUserStatus","method":"POST","auth":null,"authType":null,"headers":"Content-Type: application/json","payload":"{\"lastAffectID\":\"6011af4d55616657708f8d6d\", \"userID\":\"5ff742f09bb9905f98eb348e\"}","name":"test update user status","description":"34. test userController's function updateUserStatus (userID, lastAffectID, lastCollaborationStatus, minutesToRespond)\nonly userID is necessary","projects":["aa9f3b52-e00c-4afe-b242-f711837314e8"],"type":"saved","updated":1612558786095,"created":1612558786095,"kind":"ARC#RequestData","key":"56ccadba-0524-490e-879a-c6d02395dd4c"},{"url":"https://localhost:3000/test/removeOrg","method":"POST","auth":null,"authType":null,"headers":"Content-Type: application/json","payload":"{\"unitID\":\"5ffce56df79b1423c82035dc\"}","name":"test remove org","description":"tests the removeOrgUnit from teamController within test.js /removeOrg route.","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","fa950d73-93f0-4134-91db-b63db2a996e1"],"type":"saved","updated":1610483926224,"created":1610469869255,"kind":"ARC#RequestData","key":"585a57ab-8b15-4848-a7a9-767066e8e30b"},{"updated":1612115719696,"created":1610398282592,"headers":"Content-Type: application/json","method":"POST","url":"https://localhost:3000/test/insertAffectHistoryEntry","auth":null,"authType":null,"description":"This request tests the affectController's function insertAffectHistoryEntry (affectID, relatedID, isUser)","payload":"{\"affectID\":\"6008928508baff43187a74f1\", \"teamID\":\"5ff742f09bb9905f98eb348e\", \"userID\":\"5ff742f09bb9905f98eb348e\"}","name":"test insert affect history entry","projects":["e37f1a8d-29ed-4dc9-89db-399940b46187"],"type":"saved","kind":"ARC#RequestData","key":"5d7d324b-d405-497c-9b79-0adaffbf0859"},{"updated":1610483815869,"created":1610403497025,"headers":"Content-Type: application/json\ncontent-length: 29","method":"POST","payload":"{\"teamName\":\"larissa's Team\"}","url":"https://localhost:3000/test/registerTeam","type":"saved","auth":null,"authType":null,"name":"Test register Team","description":"Test CreateTeam function from teamController within test.js","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","ed64b06a-3895-4cb0-a38d-dadea444d4fe"],"kind":"ARC#RequestData","key":"8314c166-2990-4032-a501-61c7cbdf0810"},{"updated":1610483531403,"created":1610309074267,"headers":"Authorization: digest eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmY3NDJmMDliYjk5MDVmOThlYjM0OGYiLCJlbWFpbCI6ImFueXdoZXJlQGVtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkpvZSIsImxhc3ROYW1lIjoiQW55Ym9keSIsInVzZXJUeXBlIjoiYWRtaW4iLCJtZXRhIjoie30iLCJpYXQiOjE2MTAzMDc1MjAsImV4cCI6MTYxMjg5OTUyMCwiYXVkIjoiYW55d2hlcmVAZW1haWwuY29tIiwiaXNzIjoiS2FydW5hIiwic3ViIjoiYXV0aG9yaXphdGlvbiJ9.g9LQygRhMf7XxVIYrUR7QSng8K28NzuYfQ25ZqGE2TU","method":"GET","url":"https://localhost:3000/data/user/list?fullInfo=true&perPage=10&page=0&sortBy=userType&sortOrder=1&filterBy=lastName&filter=Ber","type":"saved","auth":null,"authType":null,"name":"List All Users","description":"List all users in the database\n- Requires valid JWT and 'admin' status\n- Accepts pagination variables (perPage and page)\n- Pass 'fullInfo=true' in query string for all info\n- Defaults to IDs only\n- Returns array with ID or fullInfo (See above)\n- Returns { error: true } and message on error","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","aa9f3b52-e00c-4afe-b242-f711837314e8"],"payload":"","kind":"ARC#RequestData","key":"8cad471b-df7a-4e36-9da5-dda2f47d536e"},{"url":"https://localhost:3000/test/listTeamsInUnit/5ffdf189766fc561704c220b","method":"GET","auth":null,"authType":null,"headers":"","payload":"{\"unitID\":\"5ffce56df79b1423c82035dc\"}","name":"test list teams in org unit","description":"tests teamController's listTeamsInUnit function within test.js","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","ed64b06a-3895-4cb0-a38d-dadea444d4fe"],"type":"saved","updated":1612118870345,"created":1610470800127,"kind":"ARC#RequestData","key":"8de4ca53-a806-43e9-bfc1-af5a59c6d79e"},{"url":"http://localhost:8080/game/rateGame","method":"POST","auth":null,"authType":null,"headers":"Content-Type: application/json","payload":"{\"gameId\": 1, \"positive\":true}","name":"rateGame","description":"gameRouter /rateGame takes in json with int \"gameId\" and boolean \"positive\"","projects":["712ef4f4-63c0-4bcc-8f83-17e63f2d3269"],"type":"saved","updated":1616100456300,"created":1616100456300,"kind":"ARC#RequestData","key":"9b1c24d8-2c6c-4c2e-952a-95dd010873f2"},{"updated":1610484127983,"created":1610401929415,"headers":"Content-Type: application/json\ncontent-length: 95","method":"POST","payload":"{\"email\":\"larissa@coreyford.com\", \"firstName\":\"Larissa\", \"lastName\":\"Ford\", \"password\":\"password\"}","url":"https://localhost:3000/auth/register","type":"saved","auth":null,"authType":null,"name":"Test Register User","description":"Tests userController's emailExists function and authController's createUser.","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","27b24e89-0cfb-4ad8-b9bf-498e08cf8304","aa9f3b52-e00c-4afe-b242-f711837314e8"],"kind":"ARC#RequestData","key":"9b8820f7-1652-443e-9e5d-21462d38496f"},{"updated":1610652686528,"created":1610398282592,"headers":"Authorization: digest eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjc0MmYwOWJiOTkwNWY5OGViMzQ4ZiIsImVtYWlsIjoiYW55d2hlcmVAZW1haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9lIiwibGFzdE5hbWUiOiJBbnlib2R5IiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTYxMDMxMzMxMywiZXhwIjoxNjEyOTA1MzEzLCJhdWQiOiJhbnl3aGVyZUBlbWFpbC5jb20iLCJpc3MiOiJLYXJ1bmEiLCJzdWIiOiJhdXRob3JpemF0aW9uIn0.7uL7FBTY-Fp97fHSMMt3UnUS7kNQwQQTU98fHVCI-6M","method":"GET","url":"https://localhost:3000/data/unit/list?fullInfo=true&perPage=50&page=0&sortBy=name&sortOrder=1&filterBy=name&filter=erd","auth":null,"authType":null,"description":"This request tests the listUnits function from the unitController in orgUnit.js","payload":"","name":"List All Units","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","fa950d73-93f0-4134-91db-b63db2a996e1"],"type":"saved","kind":"ARC#RequestData","key":"9be106c4-4211-405d-aaae-198ccacf5934"},{"url":"http://192.168.56.102/CS404/Module1-4/postData.php","method":"POST","auth":null,"authType":null,"payload":"{\n        \"id\":10,\n        \"title\":\"post test game\",\n        \"year\":2021,\n        \"bggRating\":10.0,\n        \"minPlayers\": 0,\n        \"maxPlayers\": 100,\n        \"minPlaytime\": 0,\n        \"maxPlaytime\": 0,\n        \"minAge\": 0,\n        \"designer\": \"me\",\n        \"artist\": \"me\",\n        \"publisher\": \"me\"    }","name":"postData module 1-4","description":"","projects":["17cdf28b-f8f3-4cd7-b8db-340db5629d2c"],"type":"saved","updated":1614874420491,"created":1614874420491,"kind":"ARC#RequestData","key":"9e68f1ad-67a5-4d83-b6eb-f8d57846ba6a"},{"updated":1611333617171,"created":1611187189205,"headers":"Content-Type: application/json\ncontent-length: 74","method":"POST","payload":"{\"message\":\"this is a test\",\"correspondentID\": \"5ffcd963393406469c8a33f0\"}","url":"https://localhost:3000/test/logWizardMessage","type":"saved","auth":null,"authType":null,"name":"test log wizard message","description":"test logController's logWizardMessage (message, correspondentID)\nfails if it does not recieve a message, but does not need correspondentID","projects":["9206c677-6508-4601-8d5d-26dd4b9a6814"],"kind":"ARC#RequestData","key":"9f0de1d8-5158-4ebc-b5c3-95dfccc3c585"},{"url":"https://localhost:3000/test/getUserStatus/5ff742f09bb9905f98eb348e","method":"GET","auth":null,"authType":null,"headers":"","payload":"{\"lastAffectID\":\"6011af4d55616657708f8d6d\", \"userID\":\"5ff742f09bb9905f98eb348e\"}","description":"test 33. test userControllers function getUserStatus (userID)","updated":1612561427613,"name":"test getUserStatus","projects":["aa9f3b52-e00c-4afe-b242-f711837314e8"],"type":"saved","created":1612561427613,"kind":"ARC#RequestData","key":"b4f4e44c-7311-4717-aa05-24cef6877922"},{"updated":1610483572309,"created":1610313625333,"headers":"Authorization: digest eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjc0MmYwOWJiOTkwNWY5OGViMzQ4ZiIsImVtYWlsIjoiYW55d2hlcmVAZW1haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9lIiwibGFzdE5hbWUiOiJBbnlib2R5IiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTYxMDMxMzMxMywiZXhwIjoxNjEyOTA1MzEzLCJhdWQiOiJhbnl3aGVyZUBlbWFpbC5jb20iLCJpc3MiOiJLYXJ1bmEiLCJzdWIiOiJhdXRob3JpemF0aW9uIn0.7uL7FBTY-Fp97fHSMMt3UnUS7kNQwQQTU98fHVCI-6M\nContent-Type: application/json\ncontent-length: 66","method":"POST","payload":"{\n  \"id\": \"5ff742f09bb9905f98eb348e\",\n  \"firstName\": \"Seth\"\n}\n","url":"https://localhost:3000/data/user/update/","type":"saved","name":"User Basic Update","description":"Update basic user data.\n- Requires { userID } and a valid JWT\n- JWT id must match userID or user must be 'admin'\n- Include 'firstName', 'lastName' or 'meta' to update\n- Cannot update 'emai', 'userType' or 'password'\n- Returns { error: true } and a message on error\n- Returns { success: true } on success (even if nothing changed)","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","aa9f3b52-e00c-4afe-b242-f711837314e8"],"kind":"ARC#RequestData","key":"bd8b5634-4686-4600-9a31-3e9999a893d4"},{"updated":1611349395930,"created":1610398282592,"headers":"","method":"GET","url":"https://localhost:3000/test/getAffectDetails/6008928508baff43187a74f0","auth":null,"authType":null,"description":"This request tests the affectController's function getAffectDetails (affectID)","payload":"","name":"test get affect details","projects":["e37f1a8d-29ed-4dc9-89db-399940b46187"],"type":"saved","kind":"ARC#RequestData","key":"c2b6d146-b0be-419f-92d4-8db0d7f7e6c4"},{"url":"https://localhost:3000/test/removeTeam","method":"POST","auth":null,"authType":null,"payload":"{\"teamID\":\"5ffce0caf0003d134c29a796\"}","headers":"Content-Type: application/json","name":"test remove Team","description":"tests route /removeTeam in test.js which uses teamController's removeTeam function.","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","ed64b06a-3895-4cb0-a38d-dadea444d4fe"],"type":"saved","updated":1610483915814,"created":1610469310153,"kind":"ARC#RequestData","key":"c7541624-be66-4f9f-a11f-c52bfce1ff4a"},{"updated":1610483552845,"created":1610313293824,"headers":"Authorization: digest eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjc0MmYwOWJiOTkwNWY5OGViMzQ4ZiIsImVtYWlsIjoiYW55d2hlcmVAZW1haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9lIiwibGFzdE5hbWUiOiJBbnlib2R5IiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTYxMDMxMzMxMywiZXhwIjoxNjEyOTA1MzEzLCJhdWQiOiJhbnl3aGVyZUBlbWFpbC5jb20iLCJpc3MiOiJLYXJ1bmEiLCJzdWIiOiJhdXRob3JpemF0aW9uIn0.7uL7FBTY-Fp97fHSMMt3UnUS7kNQwQQTU98fHVCI-6M\nContent-Type: application/json\ncontent-length: 42","method":"POST","payload":"{\n  \"id\": \"5ff742f09bb9905f98eb3493\"\n}\n","url":"https://localhost:3000/data/user/promote/","type":"saved","name":"User Promotion","description":"Promote a user to 'admin' status.\n- Requires valid JWT\n- Requestor must be an 'admin'\n- Returns { error: true } on error with a message\n- Returns { success: true } on success (or if user is already an admin)","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","aa9f3b52-e00c-4afe-b242-f711837314e8"],"kind":"ARC#RequestData","key":"c786e4be-1d45-41f4-81f5-a28b14cc7875"},{"url":"https://localhost:3000/login.html?dest=%2FdbAdmin%2FmanageUsers.html","method":"GET","auth":null,"authType":null,"name":"database login page","description":"a login page that redirects to the database page when an admin logs in.","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6"],"type":"saved","updated":1610483383422,"created":1610483383422,"headers":"","payload":"","kind":"ARC#RequestData","key":"cc4aa533-bbc7-4cd6-8643-0006200d9040"},{"url":"http://localhost:8080/game/getOveralRating/1","method":"GET","auth":null,"authType":null,"name":"getOveralRating","description":"returns the total rating of a game given a gameID","projects":["712ef4f4-63c0-4bcc-8f83-17e63f2d3269"],"type":"saved","updated":1616100557865,"created":1616100557865,"kind":"ARC#RequestData","key":"d89aa2e4-110f-4610-9f94-c0c4fdb848aa"},{"updated":1610399681875,"created":1610399521852,"headers":"Content-Type: application/json\ncontent-length: 95","method":"POST","payload":"{\"email\":\"anywhere@email.com\", \"firstName\":\"Larissa\", \"lastName\":\"Ford\", \"password\":\"password\"}","url":"https://localhost:3000/test/login","type":"saved","timeLabel":"3:12:01 PM","dayTime":1610344800000,"today":true,"hasHeader":true,"header":"Today","name":"Test Login from test.js","description":"tests validateUser from authController","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6"],"kind":"ARC#RequestData","key":"daf726e2-2389-4bd1-9c66-9a5dde46dde3"},{"updated":1610483834803,"created":1610401929415,"headers":"Content-Type: application/json\ncontent-length: 95","method":"POST","payload":"{\"teamID\":\"5ffcd9c8393406469c8a33f2\", \"userID\": \"5ffcd963393406469c8a33f0\"}","url":"https://localhost:3000/test/addToTeam","type":"saved","auth":null,"authType":null,"name":"Test adding Users to Teams","description":"uses teamController's addToTeam function to add members to a team. This does not work yet.","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","ed64b06a-3895-4cb0-a38d-dadea444d4fe"],"kind":"ARC#RequestData","key":"eb24eb6c-a0c4-42ec-8462-2de2476c4d2a"},{"url":"https://localhost:3000/dbAdmin/manageTeams.html","method":"GET","auth":null,"authType":null,"description":"need to have an admin user logged in to access this page.","updated":1610566270755,"created":1610483178386,"headers":"Authorization: digest eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjc0MmYwOWJiOTkwNWY5OGViMzQ4ZiIsImVtYWlsIjoiYW55d2hlcmVAZW1haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9lIiwibGFzdE5hbWUiOiJBbnlib2R5IiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTYxMDMxMzMxMywiZXhwIjoxNjEyOTA1MzEzLCJhdWQiOiJhbnl3aGVyZUBlbWFpbC5jb20iLCJpc3MiOiJLYXJ1bmEiLCJzdWIiOiJhdXRob3JpemF0aW9uIn0.7uL7FBTY-Fp97fHSMMt3UnUS7kNQwQQTU98fHVCI-6M","name":"dbAdmin list Teams","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6"],"type":"saved","payload":"","kind":"ARC#RequestData","key":"f2764fa2-60fc-429f-85f8-fd7f71ad5e58"},{"updated":1611084681641,"created":1610398282592,"headers":"","method":"GET","url":"https://localhost:3000/test/getTeamDetails/5ffdf189766fc561704c2220","auth":null,"authType":null,"description":"This tests the getTeamDetails from the teamController. \nIt takes a teamID from the url.","payload":"","name":"test get team details","projects":["ed64b06a-3895-4cb0-a38d-dadea444d4fe"],"type":"saved","kind":"ARC#RequestData","key":"f313718c-a088-4da8-b999-ddf97c02326f"},{"url":"https://localhost:3000/dbAdmin/manageUsers.html","method":"GET","auth":null,"authType":null,"name":"Database home page","description":"need to have an admin user logged in to access this page.","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6"],"type":"saved","updated":1610483178386,"created":1610483178386,"headers":"","payload":"","kind":"ARC#RequestData","key":"f89562b4-cf43-4778-bdd4-a2b38383c50a"},{"updated":1610652751514,"created":1610398282592,"headers":"Authorization: digest eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjc0MmYwOWJiOTkwNWY5OGViMzQ4ZiIsImVtYWlsIjoiYW55d2hlcmVAZW1haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9lIiwibGFzdE5hbWUiOiJBbnlib2R5IiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTYxMDMxMzMxMywiZXhwIjoxNjEyOTA1MzEzLCJhdWQiOiJhbnl3aGVyZUBlbWFpbC5jb20iLCJpc3MiOiJLYXJ1bmEiLCJzdWIiOiJhdXRob3JpemF0aW9uIn0.7uL7FBTY-Fp97fHSMMt3UnUS7kNQwQQTU98fHVCI-6M","method":"GET","url":"https://localhost:3000/data/team/list?fullInfo=true&perPage=10&page=0&sortBy=name&sortOrder=1&filterBy=name&filter=Green","type":"saved","auth":null,"authType":null,"name":"List All Teams","description":"This request tests the listTeams function from the teamController in team.js","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","ed64b06a-3895-4cb0-a38d-dadea444d4fe"],"payload":"","kind":"ARC#RequestData","key":"f8fee0d3-f6a0-454e-9e4c-d2f2f04aa5c4"},{"url":"https://localhost:3000/login.html?dest=%2Foz%2FemeraldCity.html","method":"GET","auth":null,"authType":null,"name":"emerald city login page","description":"The login page that redirects to the emerald city","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6"],"type":"saved","updated":1610483087968,"created":1610483087968,"headers":"","payload":"","kind":"ARC#RequestData","key":"fd60f7f2-4dd7-406a-9202-a59163be4bc9"},{"url":"https://localhost:3000/test/removeUser","method":"POST","auth":null,"authType":null,"headers":"Content-Type: application/json","payload":"{\"userID\": \"5ffcd963393406469c8a33f0\"}","name":"test remove user","description":"test userController's removeUser function within test.js","projects":["1b50da82-8ddf-46a0-8a22-54bee1d65cd6","aa9f3b52-e00c-4afe-b242-f711837314e8"],"type":"saved","updated":1610483991656,"created":1610471434139,"kind":"ARC#RequestData","key":"fd82f675-0a5f-4300-b771-7d89e996cdfc"}],"projects":[{"updated":1616091009456,"order":0,"requests":[],"name":"cs458","description":"Software Engineering Capstone: Web Arcade","kind":"ARC#ProjectData","key":"712ef4f4-63c0-4bcc-8f83-17e63f2d3269"}]}