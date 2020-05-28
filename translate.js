$(document).ready(function () {
    class Translate{
        constructor(){
            this.All_round_Key=[];
            this.Combines=[];
            this.rounds=[];
        }
        str2hex(string,Bit){//code snippet to convert input string to hexadecimal form
            var hex='';
            for(var i=0;i<string.length;i++){
                hex=hex+string.charCodeAt(i).toString(16).toUpperCase();
            }
            while(hex.length%(Bit/4)){
                hex=hex+'0';
            }
            console.log(hex);
            return hex;
        }
        hex2bin(string){
            return (parseInt(string, 16).toString(2)).padStart(4, '0');/*parseInt converts the hexadecimal to binary 
            and it is ensured that 4 bits are occupied per hexadecimal char*/
        }
        hex2bin_(string){//contains input plaintext or key as input
            var result='';//result will store final binary text
            string.split("").forEach(str => {// splitting the input one character at a time
                result += this.hex2bin(str);//one hexadecimal character converted to binary and appended to result
            })
            return result;// plaintext of 16 hexadecimal form converted to 64 binary text
        }
        Initial_Permutation(string,Bit){////argument is 64 bits text
            var Initial_Permutation=[
                //for 32 bit block length
                [18,27,14,5,10,26,16,24,
                2,15,31,17,30,19,8,9,
                25,20,28,3,22,29,4,32,
                12,13,21,23,6,11,7,1],

                //for 64 bit block length
                [58,50,42,34,26,18,10,2, 
                60,52,44,36,28,20,12,4, 
                62,54,46,38,30,22,14,6, 
                64,56,48,40,32,24,16,8, 
                57,49,41,33,25,17,9,1, 
                59,51,43,35,27,19,11,3, 
                61,53,45,37,29,21,13,5, 
                63,55,47,39,31,23,15,7],

                //for 128 bit block length
                [10,77,84,21,106,42,18,89,
                66,7,94,48,82,81,78,28,
                123,54,56,103,102,41,100,125,
                74,12,24,122,46,109,126,15,
                112,105,26,75,58,35,120,53,
                34,108,40,107,96,110,98,95,
                118,92,117,83,2,115,111,59,
                90,19,127,99,79,71,69,61,
                128,93,44,101,6,91,87,63,
                116,1,114,47,22,68,124,73,
                70,80,72,57,88,86,104,55,
                121,9,76,17,30,45,51,50,
                64,13,60,62,14,49,52,27,
                65,33,23,25,36,38,43,119,
                32,20,113,39,97,85,29,3,
                67,37,16,11,8,31,4,5]
            ];
            var str='';
            // according to the Initial_Permutation array swapping is done and 64/32/128 bits text is returned
            if(Bit==64){
                for(var i=0;i<64;i++){
                    str=str+string[Initial_Permutation[1][i]-1];
                }
            }
            else if(Bit==32){
                for(var i=0;i<32;i++){
                    str=str+string[Initial_Permutation[0][i]-1];
                }
            }
            else{
                for(var i=0;i<128;i++){
                    str=str+string[Initial_Permutation[2][i]-1];
                }
            }
            return str;
        }
        Permuted_Choice1(string,Bit){
            var PC_1=[
            //for 64 bits plaintext
            [57,49,41,33,25,17,9, 
            1,58,50,42,34,26,18, 
            10,2,59,51,43,35,27, 
            19,11,3,60,52,44,36,		 
            63,55,47,39,31,23,15, 
            7,62,54,46,38,30,22, 
            14,6,61,53,45,37,29, 
            21,13,5,28,20,12,4],

            //for 32 bits plaintext
            [6,18,11,9,12,3,10,
            23,27,19,30,14,28,25,
            2,26,13,22,20,21,29,
            17,31,15,4,5,7,1],

            //for 128 bits plaint text
            [55,1,25,23,61,95,97,92,107,19,115,116,109,90,71,85,75,91,12,125,111,100,7,67,110,126,
            83,113,17,105,124,35,31,28,101,103,43,26,123,10,122,51,117,99,108,106,11,68,121,15,46,
            102,5,45,98,119,34,77,57,52,70,20,37,93,78,73,53,63,79,94,62,81,66,127,49,60,58,33,74,
            39,59,44,69,50,87,89,65,36,30,82,38,9,42,29,14,21,84,47,27,18,6,22,86,76,118,54,114,41,3,13,4,2]
        ];
            var str='';
            //according to the Permuted_Choice1 array swapping is done
            if(Bit==64){
                for(var i=0;i<56;i++){//8 bits dropped
                    str=str+string[PC_1[0][i]-1];
                }
            }
            else if(Bit==32){
                for(var i=0;i<28;i++){//4 bits dropped
                    str=str+string[PC_1[1][i]-1];
                }
            }
            else{
                for(var i=0;i<112;i++){//16 bits dropped
                    str=str+string[PC_1[2][i]-1];
                }
            }
            return str;// 56/32/112 bits key is returned after dropping 8/4/16 bits
        }
        Purmuted_Choice2(string,Bit){//argument string is C+D that is 56/32/112 bits string
            var PC_2=[
                //for 64 bits plaintext
                [14,17,11,24,1,5, 
                3,28,15,6,21,10, 
                23,19,12,4,26,8, 
                16,7,27,20,13,2, 
                41,52,31,37,47,55, 
                30,40,51,45,33,48, 
                44,49,39,56,34,53, 
                46,42,50,36,29,32],

                //for 32 bits plaintext
                [12,25,4,27,20,19,24,18,28,22,21,17,3,15,9,14,10,5,8,6,11,1,2,13],

                //for 128 bits plaintext
                [85,102,9,65,35,53,99,29,20,45,104,75,100,4,21,14,23,3,13,98,106,
                6,27,79,57,42,111,12,69,38,108,64,54,32,96,51,91,36,82,74,110,70,
                88,84,78,86,66,11,76,67,60,77,56,68,52,50,94,92,105,55,97,49,62,63,
                28,48,40,59,44,80,71,101,87,1,41,73,46,30,83,22,26,34,5,103,37,18,24,89,17,47,19,10,25,7,8,2]];
            var str='';
            //according to the Permuted_Choice2 array swapping is done
            if(Bit==64){
                for(var i=0;i<48;i++){//8 bits dropped
                    str=str+string[PC_2[0][i]-1];
                }
            }
            else if(Bit==32){
                for(var i=0;i<24;i++){//4 bits dropped
                    str=str+string[PC_2[1][i]-1];
                }
            }
            else{
                for(var i=0;i<96;i++){//16 bits dropped
                    str=str+string[PC_2[2][i]-1];
                }
            }
            return str;//// 48 /24/96 bits binary string is returned depending on 64/32/128 bit block length
        }
        Expansion_Block(string,Bit){//// argument string is 32/16/64 bits
            var Expansion=[
                //contains duplicate 16 bits, for 64 bit block length
                [32,1,2,3,4,5,4,5, 
                6,7,8,9,8,9,10,11, 
                12,13,12,13,14,15,16,17, 
                16,17,18,19,20,21,20,21, 
                22,23,24,25,24,25,26,27, 
                28,29,28,29,30,31,32,1],

                //contains duplicate 8 bits, for 64 bit block length
                [5,12,7,13,9,2,14,6,16,10,3,11,1,15,4,8,10,5,15,3,6,1,2,9],

                //contains duplicate 32 bits, for 64 bit block length
                [46,1,18,56,22,62,48,64,60,34,61,32,2,22,12,58,1,26,42,52,16,50,57,62,56,64,
                29,30,7,55,23,40,25,63,37,20,24,48,59,18,31,37,28,34,57,40,61,36,52,42,20,
                55,26,15,50,10,47,7,8,53,41,51,6,4,14,59,35,19,30,63,58,54,25,44,33,27,2,38,49,
                45,32,39,29,43,31,24,23,21,17,9,11,12,5,13,16,3]
            ];
            var str='';
            //according to  Expansion array swapping is done 
            if(Bit==64){
                for(var i=0;i<48;i++){
                    str=str+string[Expansion[0][i]-1];
                }
            }
            else if(Bit==32){
                for(var i=0;i<24;i++){
                    str=str+string[Expansion[1][i]-1];
                }
            }
            else{
                for(var i=0;i<96;i++){
                    str=str+string[Expansion[2][i]-1];
                }
            }
            return str;// 48/32/96 bits binary string is returned
        }
        Left_Circular_Shift(C,N){//text C is shifted left by N bits
            var str=C.substr(N);
            str=str+C.substr(0,N);
            return str;
        }
        XOr(R,K){//R and K both equal bits long
            var str='';
            for(var i=0;i<R.length;i++){
                if(R[i]==K[i]){// if both bits same then set the bit as '0'
                    str=str+'0';
                }
                else{
                    str=str+'1';//if both bits differ then set the bit to '1'
                }
            }
            return str;
        }
        Substitution_box(string){//argument string is R which is 48/32/96 bits long
            var S_box= [[ 
                [14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7], 
                [0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8], 
                [4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0], 
                [15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13] 
            ], 
            [
                [15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10], 
                [3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5], 
                [0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15], 
                [13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9] 
            ], 
          
          
            [
                [10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8], 
                [13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1], 
                [13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7], 
                [1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12] 
            ], 
            [ 
                [7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15], 
                [13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9], 
                [10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4], 
                [3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14] 
            ], 
            [ 
                [2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9], 
                [14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6], 
                [4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14], 
                [11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3] 
            ], 
            [ 
                [12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11], 
                [10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8], 
                [9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6], 
                [4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13] 
            ], 
            [ 
                [4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1], 
                [13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6], 
                [1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2], 
                [6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12] 
            ], 
            [ 
                [13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7], 
                [1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2], 
                [7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8], 
                [2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11] 
            ],
            [
                [9,4,11,3,1,15,10,14,13,8,7,6,5,12,2,0],
                [7,11,3,1,14,6,12,2,15,13,5,9,10,8,4,0],
                [1,5,14,8,13,3,11,9,15,12,6,0,7,2,10,4],
                [11,15,14,12,13,8,1,2,3,4,5,9,7,10,6,0]
            ],
            [
                [7,10,3,11,15,1,5,14,12,13,8,0,6,9,2,4],
                [2,7,4,11,10,3,15,13,9,8,6,14,5,1,0,12],
                [4,0,12,14,13,8,11,9,15,5,10,6,7,3,2,1],
                [2,1,15,0,10,7,6,14,13,11,4,8,9,5,12,3]
            ],
            [
                [9,14,11,12,5,1,15,2,10,4,13,6,7,8,3,0],
                [2,3,12,11,6,13,8,10,15,5,0,14,7,9,4,1],
                [6,9,2,1,15,10,4,0,11,13,8,14,7,5,3,12],
                [12,9,6,2,0,10,4,13,14,8,11,7,5,3,15,1]
            ],
            [
                [6,4,12,11,10,5,14,1,15,13,9,7,2,8,0,3],
                [3,8,9,1,11,13,15,2,10,14,5,7,4,6,12,0],
                [5,2,15,12,13,10,7,11,8,9,6,14,1,4,3,0],
                [10,7,2,5,15,12,13,14,9,8,4,6,11,1,0,3]
            ],
            [
                [6,11,12,2,13,3,15,8,9,5,14,1,7,10,0,4],
                [4,0,6,1,14,15,11,9,10,13,8,5,7,3,2,12],
                [5,12,9,10,13,2,7,0,15,14,3,6,1,8,11,4],
                [8,1,0,6,4,5,12,14,13,7,11,15,9,10,3,2]
            ],
            [
                [14,13,10,11,15,12,8,1,6,3,4,7,2,9,0,5],
                [7,1,14,8,15,11,13,10,12,9,6,5,3,4,2,0],
                [14,2,4,7,15,1,11,8,6,13,9,5,12,3,0,10],
                [13,1,9,10,14,6,11,15,5,2,8,7,4,3,12,0]
            ],
            [
                [14,0,8,9,6,13,15,3,11,1,12,5,2,4,10,7],
                [7,12,3,13,14,10,15,11,9,8,6,2,5,0,1,4],
                [3,14,1,10,11,5,9,8,15,13,12,4,7,2,6,0],
                [3,1,7,15,13,4,14,9,12,0,8,5,11,10,2,6]
            ],
            [
                [11,2,15,5,13,10,7,8,3,4,12,14,9,6,1,0],
                [2,4,6,12,10,8,14,1,15,13,9,5,7,11,0,3],
                [7,15,3,4,14,5,11,1,9,13,8,2,6,10,12,0],
                [13,11,14,15,5,12,1,2,10,4,7,9,6,8,3,0]
            ]
        ]; 
            var i=0;
            var str='';
            var count=0;
            while(i<string.length){
                var Row=parseInt(string[i]+string[i+5],2);// row is given by first and last bit of 6 bits converted to decimal form
                var Col=parseInt(string.substr(i+1,4),2);// column is given by middle 4 bits of the 6 bits converted to decimal form
                str=str+(S_box[count][Row][Col].toString(2)).padStart(4,'0');/* output is value in the particular Sbox at given row and 
                column converted into 4 bit binary again*/
                count++;// count determines the number of s_box
                i=i+6;// we take 6 bits of R at a time
            }
            return str;
        }
        Permutation(string,Bit){// argument is 32/16/64 bits R
            var P=[
                //for 64 bits block length
                [16,7,20,21, 
                29,12,28,17, 
                1,15,23,26, 
                5,18,31,10, 
                2,8,24,14, 
                32,27,3,9, 
                19,13,30,6, 
                22,11,4,25],

                //for 32 bits block length
                [6,13,2,1,10,16,8,15,11,14,4,3,7,9,12,5],

                //for 128 bits block length
                [1,33,3,31,9,56,15,42,63,60,51,53,49,24,29,26,59,17,37,54,55,12,48,22,44,36,23,47,57,19,7,40,64,62,39,58,5,45,
                38,4,30,14,27,43,41,25,50,34,32,20,28,10,18,21,11,6,16,52,61,35,8,13,46,2]
            ];
            var str='';
            // swapping done according to P array
            if(Bit==64){
                for(var i=0;i<32;i++){
                    str=str+string[P[0][i]-1];
                }
            }
            else if(Bit==32){
                for(var i=0;i<16;i++){
                    str=str+string[P[1][i]-1];
                }
            }
            else{
                for(var i=0;i<64;i++){
                    str=str+string[P[2][i]-1];
                }
            }
            return str;// 32/16/64 bits permuted R is returned
        }
        final_Permutation(string,Bit){//argument is R+L that is 64/32/128 bits long
            var final_perm64=[40,8,48,16,56,24,64,32, //for 64 bit block length
                39,7,47,15,55,23,63,31, 
                38,6,46,14,54,22,62,30, 
                37,5,45,13,53,21,61,29, 
                36,4,44,12,52,20,60,28, 
                35,3,43,11,51,19,59,27, 
                34,2,42,10,50,18,58,26, 
                33,1,41,9,49,17,57,25];
            var initial_perm128=[10,77,84,21,106,42,18,89,//for 128 bit block length
                66,7,94,48,82,81,78,28,
                123,54,56,103,102,41,100,125,
                74,12,24,122,46,109,126,15,
                112,105,26,75,58,35,120,53,
                34,108,40,107,96,110,98,95,
                118,92,117,83,2,115,111,59,
                90,19,127,99,79,71,69,61,
                128,93,44,101,6,91,87,63,
                116,1,114,47,22,68,124,73,
                70,80,72,57,88,86,104,55,
                121,9,76,17,30,45,51,50,
                64,13,60,62,14,49,52,27,
                65,33,23,25,36,38,43,119,
                32,20,113,39,97,85,29,3,
                67,37,16,11,8,31,4,5];
            var initial_perm32=[18,27,14,5,10,26,16,24,//for 32 bit block length
                2,15,31,17,30,19,8,9,
                25,20,28,3,22,29,4,32,
                12,13,21,23,6,11,7,1];
            // swapping done on the basis of final_permutation array
            var final_perm128=new Array(128);
            for(var i=0;i<128;i++) final_perm128[initial_perm128[i]-1]=i+1;
            var final_perm32=new Array(32);
            for(var i=0;i<32;i++) final_perm32[initial_perm32[i]-1]=i+1;
            var str='';
            if(Bit==64){
                for(var i=0;i<64;i++){
                    str=str+string[final_perm64[i]-1];
                }
            }
            else if(Bit==32){
                for(var i=0;i<32;i++){
                    str=str+string[final_perm32[i]-1];
                }
            }
            else{
                for(var i=0;i<128;i++){
                    str=str+string[final_perm128[i]-1];
                }
            }
            return str;// 64/32/128 bits permuted R+L is returned
        }
        hex2str(string){//code snippet to convert hexadecimal form to string
            var hex  = string.toString();
	        var str = '';
	        for (var n = 0; n < hex.length; n += 2) {
		    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
            }
	        return str;
        }

        bin2hex(string){//code snippet to convert binary to hexadecimal form
            var st="";
            var n=string.length;
            while(n){
                st=st+parseInt(string.substr(0,4),2).toString(16).toUpperCase();
                string=string.substr(4);
                n-=4;
            }
            return st;
        }
        Encrypt(string,key,Rounds,Bit){
            this.All_round_Key=[];//All_round_key array stores the subkeys generated at each round
            this.Combines=[];//Combines array store output after every round
            //plaintext converted from hexadecimal to binary and stored in variable txt_Bit after Initial_permutation function call
            var txt_Bit=this.Initial_Permutation(this.hex2bin_(this.str2hex(string,Bit)),Bit);
            //given key is converted to binary and stored in var key_Bit after Permuted_Choice1 function call
            var key_Bit=this.Permuted_Choice1(this.hex2bin_(key),Bit);
            //there is left circular shifts for successive rounds
            var shift_table=[1, 1, 2, 2, 
                2, 2, 2, 2,  
                1, 2, 2, 2,  
                2, 2, 2, 1 ];
            var kl=key_Bit.length;
            var tl=txt_Bit.length;
            var C=key_Bit.substr(0,kl/2);// C contains first half bits of key
            var D=key_Bit.substr(kl/2);// D contains last half bits of key
            var L=txt_Bit.substr(0,tl/2);// L contains first half bits of txt_64
            var R=txt_Bit.substr(tl/2);// R contains last half bits of txt_64
            for(var i=0;i<Rounds;i++){
                C=this.Left_Circular_Shift(C,shift_table[i]);//C after i_th left circular shift according to i_th value in the shift_table
                D=this.Left_Circular_Shift(D,shift_table[i]);//D after i_th left circular shift according to i_th value in the shift_table
                var k=this.Purmuted_Choice2(C+D,Bit);//k after Permuted_Choice2 on C+D
                this.All_round_Key.push(k);//the round key of the i_th round is stored in All_round_key array
                var R_prev=R;//This R is stored in R_prev for L of next round
                R=this.Expansion_Block(R,Bit);// R undergoes expansion
                R=this.XOr(R,k);// R and k is XORed
                R=this.Substitution_box(R);//R undergoes substitution according to S-boxes
                R=this.Permutation(R,Bit);// R undergoes Permutation
                R=this.XOr(R,L);// permuted R undergoes Xor with L
                L=R_prev;// for next round L is R_prev
                this.Combines.push(L+R);//output after every round is stored in Combines array
            }
            var Cipher_text=this.bin2hex(this.final_Permutation(R+L,Bit));/*R+L undergoes final_Permutation and binary to hexadecimal 
            conversion to get final ciphertext output*/
            return Cipher_text;// final ciphertext is returned after encryption
        }
        Decrypt(string,Rounds,Bit){//argument is the ciphertext, number of rounds, block length
            //ciphertext converted from hexadecimal to binary and stored in variable txt_Bit after Initial_permutation function call
            var txt_Bit=this.Initial_Permutation(this.hex2bin_(string),Bit);
            //tl stores the length of txt_bit after Initial_Permutation
            var tl=txt_Bit.length;
            var L=txt_Bit.substr(0,tl/2);// L contains first half bits of txt_64
            var R=txt_Bit.substr(tl/2);// R contains last half bits of txt_64
            for(var i=0;i<Rounds;i++){
                var k=this.All_round_Key[Rounds-i-1];//k contains the key of i_th round
                var R_prev=R;//This R is stored in R_prev for L of next round
                R=this.Expansion_Block(R,Bit);// R undergoes expansion
                R=this.XOr(R,k);// R and k is XORed
                R=this.Substitution_box(R);//R undergoes substitution according to S-boxes
                R=this.Permutation(R,Bit);// R undergoes Permutation
                R=this.XOr(R,L);// permuted R undergoes Xor with L
                L=R_prev;// for next round L is R_prev
            }
            var Plain_text=this.bin2hex(this.final_Permutation(R+L,Bit));/*R+L undergoes final_Permutation and binary to hexadecimal 
            conversion to get final plaintext output*/
            Plain_text=this.hex2str(Plain_text);//final plaintext is converted from hexadecimal form to string
            return Plain_text;//final plaintext is retured after decryption
        }
    }
    var translate=new Translate();//translate is an object of Translate class
    $("#p_t1").keydown(function () {//when you click at the plaintext box, 
        $("#c_t1").val("");//ciphertext box becomes NULL
    });
    $("#c_t1").keydown(function () {//when you click at ciphertext box, 
        $("#p_t1").val("");//plaintext box becomes NULL
    });
    $("#encrypt1").click(function () {//clicking Encrypt button
        var Encrypt = $("#p_t1").val();// variable Encrypt stores the value of plaintext entered
        var Encryp=Encrypt.split(",");//var Encryp stores the two strings separated by commas
        var key = $("#key1").val();// variable key stores the key entered
        var Rounds = $("#Select :selected").val();// variable Rounds stores the number of rounds selected
        var Bit = $("#Block :selected").val();//variable Bit stores the block length selected
        var Decrypted = translate.Encrypt(Encryp[0], key, Rounds, Bit);//variable Decrypted stores the final ciphertext
        $("#c_t1").val(Decrypted);//element with id c_t1 stores resultant ciphertext
        translate.rounds.push(translate.Combines);//??
        if(Encryp.length>0){
            translate.Encrypt(Encryp[1], key, Rounds, Bit);
            translate.rounds.push(translate.Combines);
        }
        var datap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var datac = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var data = translate.str2hex(Encryp[0]);
        if(data.length>16){
            data=data.substr(0,16);
        }
        for (var i = 0; i < data.length; i++) {
            if (data[i].charCodeAt(0) >= 97) datap[data[i].charCodeAt(0) - 87]++;
            else datap[data[i].charCodeAt(0) - 48]++;
        }
        data = Decrypted;
        if(data.length>16){
            data=data.substr(0,16);
        }
        for (var i = 0; i < data.length; i++) {
            if (data[i].charCodeAt(0) >= 97) datac[data[i].charCodeAt(0) - 87]++;
            else datac[data[i].charCodeAt(0) - 48]++;
        }
        for (var i = 0; i < 16; i++) {
            datac[i] = (datac[i] * 100) / data.length;
            datap[i] = (datap[i] * 100) / data.length;
        }
        var xs=[];
        var pq=[];
        for(var i=0;i<Rounds;i++)
        {
	        xs.push(i+1);
	        pq.push(0);
        } 
        for(var j=0;j<Rounds;j++)
	    {
		    for(var k=0;k<(data.length*4);k++)
		    {
			    if(translate.rounds[0][j][k]!=translate.rounds[1][j][k]) pq[j]++;
		    }
	    }
        var Plaintext = {
            x: xs,
            y: pq,
            type: 'scatter'
        };

        var da = [Plaintext];
        var layout = {
            title: "Avalanche effect",
            xaxis: {
                title: "Round Number"
            },
            yaxis: {
                title: "No of bits changed"
            }
        };
        Plotly.newPlot('myDiv', da, layout);

        var chart = new CanvasJS.Chart("chartcontainer",
            {
                title: {
                    text: "Round: " + Rounds + ", Block Size: " + Bit
                },
                legend: {
                    cursor: "pointer",
                    verticalAlign: "bottom",
                    horizontalAlign: "left",
                    dockInsidePlotArea: true,

                },
                data: [
                    {
                        type: "line",
                        showInLegend: true,
                        name: "plaintext",
                        dataPoints: [
                            { y: datap[0] },
                            { y: datap[1] },
                            { y: datap[2] },
                            { y: datap[3] },
                            { y: datap[4] },
                            { y: datap[5] },
                            { y: datap[6] },
                            { y: datap[7] },
                            { y: datap[8] },
                            { y: datap[9] },
                            { y: datap[10] },
                            { y: datap[11] },
                            { y: datap[12] },
                            { y: datap[13] },
                            { y: datap[14] },
                            { y: datap[15] }
                        ]
                    },
                    {
                        type: "line",
                        showInLegend: true,
                        name: "ciphertext",
                        dataPoints: [
                            { y: datac[0] },
                            { y: datac[1] },
                            { y: datac[2] },
                            { y: datac[3] },
                            { y: datac[4] },
                            { y: datac[5] },
                            { y: datac[6] },
                            { y: datac[7] },
                            { y: datac[8] },
                            { y: datac[9] },
                            { y: datac[10] },
                            { y: datac[11] },
                            { y: datac[12] },
                            { y: datac[13] },
                            { y: datac[14] },
                            { y: datac[15] }
                        ]
                    }
                ]
            });
        chart.render();
    });
    $("#decrypt1").click(function () {//clicking Decrypt button
        var Decrypt = $("#c_t1").val();//var Decrypt stores the ciphertext value
        var Rounds=$("#Select :selected").val();//// variable Rounds stores the number of rounds selected
        var Bit=$("#Block :selected").val();//variable Bit stores the block length selected
        var Encrypted=translate.Decrypt(Decrypt,Rounds,Bit);//variable Encrypted stores the final plaintext
        $("#p_t1").val(Encrypted);//element with id p_t1 stores resultant plaintext
    });
});