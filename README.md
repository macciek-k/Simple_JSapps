# *Simple JSapps* by_macciek-k


Simple multilingual JS-apps bundle hosted on [project's page](https://macciek-k.github.io/Simple_JSapps/). The bundle includes:
1. IPcalc by macciek-k - subnetwork calculator
2. Cypher by macciek-k - tool for coding and decoding (whith optional encryption and decryption) text using modified base64 code
3. NumberGuesser by macciek-k - Mini-game for guessing a number drawn by the computer

## Additional descryption for Cypher
Note that the *Cypher* app works bi-directionally: you can either type or paste the original message into its text field and get the encrypted/encoded message at the bottom, or type the encoded message into the bottom field and get the decoded message at the *original message* field.

### Algorithm step-by-step for encoding (with additional encryption):
1. read input field and assign its value to a varriable ```string```
2. reverse ```string```
3. encode ```string``` value to a stream of UTF-8 bytes using ```TextEncoder``` interface, then assign that value to a varriable ```code```
4. convert ```code``` value to a base64 code using ```btoa()``` function and assign that value to ```string``` varriable
5. reverse ```string```
6. if the key is defined, do an encryption:
   1. if key contains commas, remove them
   2. if key length is not an even number, clear the key value and stop doing the encryption
   3. create an array for key element, that works in such way: e.g if key value is ```"ABCDEFGH"```, then array contains ```["AB","CD","EF","GH"]```. Each value is a pair of characters that will be swapped with each other
   4. in a loop whose ```i``` counter is array length: first character of the ```array[i]``` is replaced by ```"{}{"``` string, the second one by ```"}{["```. Then ```"{}{"``` is replaced by the second one character and ```"}{["``` by the first one
7. return ```string```

### Algorithm for decoding:
1. read input field and assign its value to a varriable ```string```
2. if key is defined, do a decryption, which works the same way as encryption described above
3. reverse ```string```
4. convert ```string``` value to a code using ```atob()``` function, assign that value to ```string``` varriable (because ```atob()``` function return a string value)
5. split ```string``` value by commas to an array of strings ```arrayOfStrings```
6. in a loop whose ```i``` counter is array length: assign to ```i```-element of array of ints an int-converted ```i```-element of ```arrayOfStrings```: ```arrOfInts[i] = parseInt(arrayOfStrings[i])```
7. decode ```arrOfInts``` by ```TextDecoder``` interface and ```Uint8Array``` method; decoded string assign to ```string``` varriable
8. reverse ```string``` value
9. return ```string```

&nbsp;
### This project is made only for educational purposes,
**so I would be grateful for not doing here any commits.**
