CREATE TABLE IF NOT EXISTS user (
  userId            int NOT NULL  AUTO_INCREMENT,
  name          VARCHAR(200) NOT NULL,
  email         VARCHAR(200) NOT NULL,
  hashed_password VARCHAR(200),
  couple_key  VARCHAR(200),
  partnerId int,
  PRIMARY KEY (userId),
  FOREIGN KEY (partnerId) REFERENCES user(userId)
);