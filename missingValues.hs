module Values where
import Data.List
import Data.Ord
  -- You are given an array of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

  -- Your task is to find x * x * y.

-- -- missingValues :: [Int] -> Int
-- missingVales xs =
--     let pair = xs
--     in head pair * head pair . take 2 . sortBy (comparing Down ) $ xs

-- take 2 . concat .
firstAndLast =  concat . sortBy (comparing length) . filter ((`elem` [1, 2]) . length) . group . sortBy (comparing Down)
multipyThem xs = (head xs ^ 2) * last xs 

missingValues :: [Int] -> Int
missingValues = multipyThem . firstAndLast 

-- missingVales xs =
-- oneLiner =    take 2 . sortBy (comparing Down) 
