CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	path VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	likes INTEGER DEFAULT 0
);

INSERT INTO images (path, description)
VALUES 
('https://picsum.photos/150', 'Random photo'),
('https://picsum.photos/150', 'Random photo'),
('https://picsum.photos/150', 'Random photo'),
('https://picsum.photos/150', 'Random photo'),
('https://picsum.photos/150', 'Random photo'),
('https://picsum.photos/150', 'Random photo'); 



