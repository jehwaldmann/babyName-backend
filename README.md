# babyName-backend

The backend server for the ITC Full Stack 2022 Group Project.
Group: Jessica Sandberg Waldmann, Marcela Jarovsky, Matias Ogorinsky, Moshe Cosio.

Port is 5000

✅ [POST | "/users/signup"]: Get all the available parking spot.
Expect: Object {name, email, hashed_password, couple_key, partnerId}
Return: Message
✅ [POST | "/users/login"]: Checks if user exists, create token.
Expect: Object {email, password, user}
Return: Message
✅ [POST | "/savedBaby/savingName"]: Saves a baby name to user list.
Expect: Object {userId, baby_name}
Return: Message
✅ [GET | "/savedBaby/"]: Gets all baby names from user list.
Expect: Object {userId}
Return: Message








