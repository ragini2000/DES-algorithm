$(document).ready(function () {
    class Translate{
        constructor(){
            this.All_round_Key=[];
            this.Combines=[];
            this.rounds=[];
        }
        str2hex(string,Bit){
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
            return (parseInt(string, 16).toString(2)).padStart(4, '0');
        }
        hex2bin_(string){
            var result='';
            string.split("").forEach(str => {
                result += this.hex2bin(str);
            })
            return result;
        }
        Initial_Permutation(string,Bit){
            var Initial_Permutation=[[18,27,14,5,10,26,16,24,
                2,15,31,17,30,19,8,9,
                25,20,28,3,22,29,4,32,
                12,13,21,23,6,11,7,1],

                [58,50,42,34,26,18,10,2, 
                60,52,44,36,28,20,12,4, 
                62,54,46,38,30,22,14,6, 
                64,56,48,40,32,24,16,8, 
                57,49,41,33,25,17,9,1, 
                59,51,43,35,27,19,11,3, 
                61,53,45,37,29,21,13,5, 
                63,55,47,39,31,23,15,7],

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
                    67,37,16,11,8,31,4,5]];
            var str='';
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
            var PC_1=[[57,49,41,33,25,17,9, 
            1,58,50,42,34,26,18, 
            10,2,59,51,43,35,27, 
            19,11,3,60,52,44,36,		 
            63,55,47,39,31,23,15, 
            7,62,54,46,38,30,22, 
            14,6,61,53,45,37,29, 
            21,13,5,28,20,12,4],
            [6,18,11,9,12,3,10,23,27,19,30,14,28,25,2,26,13,22,20,21,29,17,31,15,4,5,7,1],
            [55,1,25,23,61,95,97,92,107,19,115,116,109,90,71,85,75,91,12,125,111,100,7,67,110,126,83,113,17,105,124,35,31,28,101,103,43,26,123,10,122,51,117,99,108,106,11,68,121,15,46,102,5,45,98,119,34,77,57,52,70,20,37,93,78,73,53,63,79,94,62,81,66,127,49,60,58,33,74,39,59,44,69,50,87,89,65,36,30,82,38,9,42,29,14,21,84,47,27,18,6,22,86,76,118,54,114,41,3,13,4,2]];
            var str='';
            if(Bit==64){
                for(var i=0;i<56;i++){
                    str=str+string[PC_1[0][i]-1];
                }
            }
            else if(Bit==32){
                for(var i=0;i<28;i++){
                    str=str+string[PC_1[1][i]-1];
                }
            }
            else{
                for(var i=0;i<112;i++){
                    str=str+string[PC_1[2][i]-1];
                }
            }
            return str;
        }
        Purmuted_Choice2(string,Bit){
            var PC_2=[[14,17,11,24,1,5, 
                3,28,15,6,21,10, 
                23,19,12,4,26,8, 
                16,7,27,20,13,2, 
                41,52,31,37,47,55, 
                30,40,51,45,33,48, 
                44,49,39,56,34,53, 
                46,42,50,36,29,32],
                [12,25,4,27,20,19,24,18,28,22,21,17,3,15,9,14,10,5,8,6,11,1,2,13],
                [85,102,9,65,35,53,99,29,20,45,104,75,100,4,21,14,23,3,13,98,106,6,27,79,57,42,111,12,69,38,108,64,54,32,96,51,91,36,82,74,110,70,88,84,78,86,66,11,76,67,60,77,56,68,52,50,94,92,105,55,97,49,62,63,28,48,40,59,44,80,71,101,87,1,41,73,46,30,83,22,26,34,5,103,37,18,24,89,17,47,19,10,25,7,8,2]];
            var str='';
            if(Bit==64){
                for(var i=0;i<48;i++){
                    str=str+string[PC_2[0][i]-1];
                }
            }
            else if(Bit==32){
                for(var i=0;i<24;i++){
                    str=str+string[PC_2[1][i]-1];
                }
            }
            else{
                for(var i=0;i<96;i++){
                    str=str+string[PC_2[2][i]-1];
                }
            }
            return str;
        }
        Expansion_Block(string,Bit){
            var Expansion=[[32,1,2,3,4,5,4,5, 
                6,7,8,9,8,9,10,11, 
                12,13,12,13,14,15,16,17, 
                16,17,18,19,20,21,20,21, 
                22,23,24,25,24,25,26,27, 
                28,29,28,29,30,31,32,1],
                [5,12,7,13,9,2,14,6,16,10,3,11,1,15,4,8,10,5,15,3,6,1,2,9],
                [46,1,18,56,22,62,48,64,60,34,61,32,2,22,12,58,1,26,42,52,16,50,57,62,56,64,29,30,7,55,23,40,25,63,37,20,24,48,59,18,31,37,28,34,57,40,61,36,52,42,20,55,26,15,50,10,47,7,8,53,41,51,6,4,14,59,35,19,30,63,58,54,25,44,33,27,2,38,49,45,32,39,29,43,31,24,23,21,17,9,11,12,5,13,16,3]];
            var str='';
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
            return str;
        }
        Left_Circular_Shift(C,N){
            var str=C.substr(N);
            str=str+C.substr(0,N);
            return str;
        }
        XOr(R,K){
            var str='';
            for(var i=0;i<R.length;i++){
                if(R[i]==K[i]){
                    str=str+'0';
                }
                else{
                    str=str+'1';
                }
            }
            return str;
        }
        Substitution_box(string){
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
                var Row=parseInt(string[i]+string[i+5],2);
                var Col=parseInt(string.substr(i+1,4),2);
                str=str+(S_box[count][Row][Col].toString(2)).padStart(4,'0');
                count++;
                i=i+6;
            }
            return str;
        }
        Permutation(string,Bit){
            var P=[[16,7,20,21, 
                29,12,28,17, 
                1,15,23,26, 
                5,18,31,10, 
                2,8,24,14, 
                32,27,3,9, 
                19,13,30,6, 
                22,11,4,25],[6,13,2,1,10,16,8,15,11,14,4,3,7,9,12,5],
                [1,33,3,31,9,56,15,42,63,60,51,53,49,24,29,26,59,17,37,54,55,12,48,22,44,36,23,47,57,19,7,40,64,62,39,58,5,45,38,4,30,14,27,43,41,25,50,34,32,20,28,10,18,21,11,6,16,52,61,35,8,13,46,2]];
            var str='';
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
            return str;
        }
        final_Permutation(string,Bit){
            var final_perm64=[40,8,48,16,56,24,64,32, 
                39,7,47,15,55,23,63,31, 
                38,6,46,14,54,22,62,30, 
                37,5,45,13,53,21,61,29, 
                36,4,44,12,52,20,60,28, 
                35,3,43,11,51,19,59,27, 
                34,2,42,10,50,18,58,26, 
                33,1,41,9,49,17,57,25];
            var initial_perm128=[10,77,84,21,106,42,18,89,
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
            var initial_perm32=[18,27,14,5,10,26,16,24,
                2,15,31,17,30,19,8,9,
                25,20,28,3,22,29,4,32,
                12,13,21,23,6,11,7,1];
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
            return str;
        }
        bin2hex(string){
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
            this.All_round_Key=[];
            this.Combines=[];
            var txt_Bit=this.Initial_Permutation(this.hex2bin_(this.str2hex(string,Bit)),Bit);
            var key_Bit=this.Permuted_Choice1(this.hex2bin_(key),Bit);
            var shift_table=[1, 1, 2, 2, 
                2, 2, 2, 2,  
                1, 2, 2, 2,  
                2, 2, 2, 1 ];
            var kl=key_Bit.length;
            var tl=txt_Bit.length;
            var C=key_Bit.substr(0,kl/2);
            var D=key_Bit.substr(kl/2);
            var L=txt_Bit.substr(0,tl/2);
            var R=txt_Bit.substr(tl/2);
            for(var i=0;i<Rounds;i++){
                C=this.Left_Circular_Shift(C,shift_table[i]);
                D=this.Left_Circular_Shift(D,shift_table[i]);
                var k=this.Purmuted_Choice2(C+D,Bit);
                this.All_round_Key.push(k);
                var R_prev=R;
                R=this.Expansion_Block(R,Bit);
                R=this.XOr(R,k);
                R=this.Substitution_box(R);
                R=this.Permutation(R,Bit);
                R=this.XOr(R,L);
                L=R_prev;
                this.Combines.push(L+R);
            }
            var Cipher_text=this.bin2hex(this.final_Permutation(R+L,Bit));
            return Cipher_text;
        }
        Decrypt(string,Rounds,Bit){
            var txt_Bit=this.Initial_Permutation(this.hex2bin_(string),Bit);
            var tl=txt_Bit.length;
            var L=txt_Bit.substr(0,tl/2);
            var R=txt_Bit.substr(tl/2);
            for(var i=0;i<Rounds;i++){
                var k=this.All_round_Key[Rounds-i-1];
                var R_prev=R;
                R=this.Expansion_Block(R,Bit);
                R=this.XOr(R,k);
                R=this.Substitution_box(R);
                R=this.Permutation(R,Bit);
                R=this.XOr(R,L);
                L=R_prev;
            }
            var Plain_text=this.bin2hex(this.final_Permutation(R+L,Bit));
            return Plain_text;
        }
    }
    var translate=new Translate();
    $("#Encrypted").keydown(function () {
        $("#Decrypted").val("");
    });
    $("#Decrypted").keydown(function () {
        $("#Encrypted").val("");
    });
    $("#Encrypt").click(function () {
        var Encrypt = $("#Encrypted").val();
        var Encryp=Encrypt.split(",");
        var key = $("#Key").val();
        var Rounds = $("#Select :selected").val();
        var Bit = $("#Block :selected").val();
        var Decrypted = translate.Encrypt(Encryp[0], key, Rounds, Bit);
        translate.rounds.push(translate.Combines);
        if(Encryp.length>0){
            translate.Encrypt(Encryp[1], key, Rounds, Bit);
            translate.rounds.push(translate.Combines);
        }
        $("#Decrypted").val(Decrypted);
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
                title: "No of bit changed"
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
    $("#Decrypt").click(function () {
        var Decrypt = $("#Decrypted").val();
        var Rounds=$("#Select :selected").val();
        var Bit=$("#Block :selected").val();
        var Encrypted=translate.Decrypt(Decrypt,Rounds,Bit);
        $("#Encrypted").val(Encrypted);
    });
});