
-- Create the movies table
CREATE TABLE public.movies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  poster_url TEXT,
  trailer_url TEXT,
  genre TEXT[] NOT NULL DEFAULT '{}',
  language TEXT NOT NULL,
  duration INTEGER NOT NULL,
  rating DECIMAL(3,1),
  release_date DATE,
  director TEXT,
  cast TEXT[],
  price DECIMAL(10,2) NOT NULL,
  available_seats INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.movies ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read active movies (public data)
CREATE POLICY "Anyone can view active movies" 
  ON public.movies 
  FOR SELECT 
  USING (is_active = true);

-- Insert some sample movies for testing
INSERT INTO public.movies (title, description, poster_url, genre, language, duration, rating, release_date, director, cast, price, available_seats) VALUES
('Avatar: The Way of Water', 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.', 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop', ARRAY['Action', 'Adventure', 'Sci-Fi'], 'English', 192, 7.6, '2022-12-16', 'James Cameron', ARRAY['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'], 250.00, 150),
('Top Gun: Maverick', 'After thirty years, Maverick is still pushing the envelope as a top naval aviator.', 'https://images.unsplash.com/photo-1489599005820-4df99c65e34b?w=300&h=450&fit=crop', ARRAY['Action', 'Drama'], 'English', 130, 8.3, '2022-05-27', 'Joseph Kosinski', ARRAY['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'], 220.00, 200),
('The Batman', 'When a sadistic serial killer begins murdering key political figures in Gotham.', 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop', ARRAY['Action', 'Crime', 'Drama'], 'English', 176, 7.8, '2022-03-04', 'Matt Reeves', ARRAY['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'], 280.00, 180),
('Spider-Man: No Way Home', 'With Spider-Mans identity now revealed, Peter asks Doctor Strange for help.', 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop', ARRAY['Action', 'Adventure', 'Sci-Fi'], 'English', 148, 8.4, '2021-12-17', 'Jon Watts', ARRAY['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'], 300.00, 120),
('Dune', 'A noble family becomes embroiled in a war for control over the galaxys most valuable asset.', 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop', ARRAY['Action', 'Adventure', 'Drama'], 'English', 155, 8.0, '2021-10-22', 'Denis Villeneuve', ARRAY['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'], 270.00, 160),
('No Time to Die', 'James Bond has left active service when his friend Felix Leiter enlists his help.', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop', ARRAY['Action', 'Adventure', 'Thriller'], 'English', 163, 7.3, '2021-10-08', 'Cary Joji Fukunaga', ARRAY['Daniel Craig', 'Rami Malek', 'Léa Seydoux'], 250.00, 140);
