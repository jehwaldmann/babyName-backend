CREATE TABLE IF NOT EXISTS saved_baby_name (
  baby_id            int NOT NULL  AUTO_INCREMENT,
  baby_name          VARCHAR(200) NOT NULL,
  userId int,
  PRIMARY KEY (baby_id),
  FOREIGN KEY (userId) REFERENCES user (userId)
);