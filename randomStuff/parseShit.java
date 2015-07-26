import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

public class parseShit {
	public static void main(String[] args){
		String text = "";	
		String filename = "possibleWords/4letterWords.txt";
		try{
			BufferedReader readShit = new BufferedReader(new FileReader(filename));
			text = readShit.readLine();
		}
		catch(IOException e){
			System.out.println("you screwed up");
		}
		String[] boobs = text.split(" ");
	
		try{
	                	
			PrintWriter writeMe = new PrintWriter("wordlist.txt", "UTF-8");
			
			String s1 = "";		
			String s2 = "";

			s1 = "var fourLetterWords = {};";
			writeMe.println(s1);
			for(int i = 0; i < boobs.length; i++){
				s2 = "        fourLetterWords[\"" + boobs[i] + "\"] = true;";
				writeMe.println(s2);	
			}
			
			writeMe.close();

		}

		catch(IOException e){
			System.out.println("writing error");
		}
	}
}
