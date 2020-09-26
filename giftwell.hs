module Gift where
import Data.List
import Data.Ord  -- buy :: (Num a, Eq a) => a -> [a] -> Maybe (Int, Int)
-- testing is = sortBy  (comparing Down) is -- [5,4,3,2,1]
  -- buy :: (Num a, Eq a) => a -> [a] -> Any
  -- buy :: ((a -> a -> Ordering) -> t1 -> t2) -> t1 -> t2
findNums c is = foldr  (\x acc -> if ((sum acc + x) <= c) then x : acc else acc ) [] $ sortBy  (comparing  Down) is

composing :: (Foldable t, Eq a) => [a] -> t a -> [Maybe Int]
composing source target = foldr (\x acc -> if (x `elem` target) then elemIndex x source : acc else acc ) [] source   
tupleMaker s t 
  | length( composing s t ) == 2 =  Just (head (composing s t) , last  (composing s t))
  | otherwise = Nothing

buy c is = tupleMaker is (findNums  c is)