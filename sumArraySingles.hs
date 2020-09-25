-- In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

-- For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

-- More examples in the test cases.

-- Good luck!

-- If you like this Kata, please try:
import Data.List
groupedtest = group . sort $ [1,3,2,1,4,2]
-- repeats :: (Num c, Ord c) => [c] -> c
repeats nums = foldr (\x acc -> acc + head x ) 0 . filter (\x -> length x == 1) . group . sort $ nums

-- results = repeats [3,6,8,2,2,5,5,11,13]

-- repeats([4,5,7,5,4,8]) = 15
