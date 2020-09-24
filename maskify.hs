-- convert :: (s :)
import Data.List
convert :: [a] -> [[Char]]
convert str = map (\x -> "#") str

-- intercalatetest = intercalate "" ["h", "e", "l", "l","o"]

splitNearEnd :: [a] -> ([a], [a])
splitNearEnd str =  (splitAt (length str - 4) str)

-- concat ["hello","world"]
-- converthardcoded = convert (fst (splitNearEnd "helloworld"))
-- convertdynamic str = (intercalate "" (convert (fst (splitNearEnd str))))

composed :: [Char] -> [Char]
composed str = (intercalate "" (convert (fst (splitNearEnd str)))) ++ snd (splitNearEnd str) 