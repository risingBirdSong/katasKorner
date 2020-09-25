-- convert :: (s :)
import Data.List
-- convert :: [a] -> [[Char]]
convert :: [a] -> [[Char]]
convert str = map (\x -> "#") str

-- intercalatetest = intercalate "" ["h", "e", "l", "l","o"]

-- splitNearEnd :: [a] -> ([a], [a])
splitNearEnd str =  (splitAt (length str - 4) str)

-- concat ["hello","world"]
-- converthardcoded = convert (fst (splitNearEnd "helloworld"))
-- convertdynamic str = (intercalate "" (convert (fst (splitNearEnd str))))

-- composed :: [Char] -> [Char]
-- composed str = (intercalate "" (convert (fst (splitNearEnd str)))) ++ snd (splitNearEnd str) 

-- maskify str = first ++ second 
--   where first = (intercalate "" (convert (fst (splitNearEnd str))))
--         second =  snd (splitNearEnd str)

maskify str =  (intercalate ""(convert(fst $ split))) ++ snd split
  where split = splitNearEnd str


-- maskify2 = (foldl (\(x:xs) acc -> if length acc > 4 then "#": acc else x : acc) []) "hello world"
maskify2 :: Foldable t => t Char -> [Char]
maskify2 str = foldr (\x acc -> if (length acc < 4) then x:acc else '#':acc) [] str

-- maskify3 str = replicate (cutoff) '#' ++ (str drop cutoff) where cutoff = length str - 4
testc str = replicate (length str - 4) $ '#'

replicated str = replicate (length str - 4) $ '#'
dropped str = drop (length str - 4) str
combined str = replicated str ++ dropped str 

maskifytest str = (replicate (length str - 4) $ '#') ++ (drop (length str - 4) str)