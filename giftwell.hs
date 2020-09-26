module Gift where
import Data.List
import Data.Ord  -- buy :: (Num a, Eq a) => a -> [a] -> Maybe (Int, Int)
-- testing is = sortBy  (comparing Down) is -- [5,4,3,2,1]
  -- buy :: (Num a, Eq a) => a -> [a] -> Any
  -- buy :: ((a -> a -> Ordering) -> t1 -> t2) -> t1 -> t2
buy c is =  foldr (\x acc -> if ((acc + x) < c) then acc + c else acc ) 0 $ sortBy  (comparing  Down) is