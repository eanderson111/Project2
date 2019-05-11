--Skills Seeds
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (1,'Household Chores','Packing & Unpacking','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (2,'Household Chores','Lifting & Moving Items','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (3,'Household Chores','Recycling & Disposal','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (4,'Household Chores','Yard & Garden Work','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (5,'Landscaping','Lawn Maintenance','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (6,'Landscaping','Bushes, Shrubs & Trees pruning','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (7,'Landscaping','Fences','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (8,'Landscaping','Outdoor Patios, Steps & Walkways fixes','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (9,'Landscaping','Mowers/mowing','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (10,'Landscaping','Planting','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (11,'Painting & Staining','Exterior Painting or Staining','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (12,'Painting & Staining','Interior Painting or Staining','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (13,'Painting & Staining','Paint Removal and Cleaning','2016-12-31 23:59:59','2016-12-31 23:59:59');
INSERT INTO handyman.skills (id, type, description, createdAt, updatedAt) VALUES (14,'Painting & Staining','Wallpapering','2016-12-31 23:59:59','2016-12-31 23:59:59');
-- User  Seeds
INSERT INTO handyman.users (id, first_name, last_name, address, city, state, zip, lat, lng, email, password, createdAt, updatedAt) VALUES (1, "Benjamin", "Andersen", "5982 Washburn Ave S", "Minneapolis", "MN", 55432, 87.12345, 52.12345, "benjamin.andersen@alumni.nd.edu", "$2a$10$jLwElhcF3soPAmu2ZAg/T.OXXGD88NwqQcRJM5yehVC3HdTgx5M3C",'2016-12-31 23:59:59','2016-12-31 23:59:59');

-- UserSkill Seeds
INSERT INTO handyman.userskills (id, userId, skillId, createdAt, updatedAt) VALUES (1,1,8,'2016-12-31 23:59:59','2016-12-31 23:59:59');

-- Tickets Seeds
