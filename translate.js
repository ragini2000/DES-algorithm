$(document).ready(function () {
    class Translate{
        constructor(){
            this.All_round_Key=[];
        }
        str2hex(string){
            var hex='';
            for(var i=0;i<string.length;i++){
                hex=hex+string.charCodeAt(i).toString(16).toUpperCase();
            }
            while(hex.length%16){
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
        Initial_Permutation(string){
            var Initial_Permutation=[58,50,42,34,26,18,10,2, 
                60,52,44,36,28,20,12,4, 
                62,54,46,38,30,22,14,6, 
                64,56,48,40,32,24,16,8, 
                57,49,41,33,25,17,9,1, 
                59,51,43,35,27,19,11,3, 
                61,53,45,37,29,21,13,5, 
                63,55,47,39,31,23,15,7];
            var str='';
            for(var i=0;i<64;i++){
                str=str+string[Initial_Permutation[i]-1];
            }
            return str;
        }
        Permuted_Choice1(string){
            var PC_1=[57,49,41,33,25,17,9, 
            1,58,50,42,34,26,18, 
            10,2,59,51,43,35,27, 
            19,11,3,60,52,44,36,		 
            63,55,47,39,31,23,15, 
            7,62,54,46,38,30,22, 
            14,6,61,53,45,37,29, 
            21,13,5,28,20,12,4];
            var str='';
            for(var i=0;i<56;i++){
                str=str+string[PC_1[i]-1];
            }
            return str;
        }
        Purmuted_Choice2(string){
            var PC_2=[14,17,11,24,1,5, 
                3,28,15,6,21,10, 
                23,19,12,4,26,8, 
                16,7,27,20,13,2, 
                41,52,31,37,47,55, 
                30,40,51,45,33,48, 
                44,49,39,56,34,53, 
                46,42,50,36,29,32];
            var str='';
            for(var i=0;i<48;i++){
                str=str+string[PC_2[i]-1];
            }
            return str;
        }
        Expansion_Block(string){
            var Expansion=[32,1,2,3,4,5,4,5, 
                6,7,8,9,8,9,10,11, 
                12,13,12,13,14,15,16,17, 
                16,17,18,19,20,21,20,21, 
                22,23,24,25,24,25,26,27, 
                28,29,28,29,30,31,32,1];
            var str='';
            for(var i=0;i<48;i++){
                str=str+string[Expansion[i]-1];
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
            ]]; 
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
        Permutation(string){
            var P=[16,7,20,21, 
                29,12,28,17, 
                1,15,23,26, 
                5,18,31,10, 
                2,8,24,14, 
                32,27,3,9, 
                19,13,30,6, 
                22,11,4,25];
            var str='';
            for(var i=0;i<32;i++){
                str=str+string[P[i]-1];
            }
            return str;
        }
        final_Permutation(string){
            var final_Permutation=[40,8,48,16,56,24,64,32, 
                39,7,47,15,55,23,63,31, 
                38,6,46,14,54,22,62,30, 
                37,5,45,13,53,21,61,29, 
                36,4,44,12,52,20,60,28, 
                35,3,43,11,51,19,59,27, 
                34,2,42,10,50,18,58,26, 
                33,1,41,9,49,17,57,25 ];
            var str='';
            for(var i=0;i<64;i++){
                str=str+string[final_Permutation[i]-1];
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
        Encrypt(string,key){
            var txt_64=this.Initial_Permutation(this.hex2bin_(this.str2hex(string)));
            var key_56=this.Permuted_Choice1(this.hex2bin_(key));
            var shift_table=[1, 1, 2, 2, 
                2, 2, 2, 2,  
                1, 2, 2, 2,  
                2, 2, 2, 1 ];
            var C=key_56.substr(0,28);
            var D=key_56.substr(28);
            var L=txt_64.substr(0,32);
            var R=txt_64.substr(32);
            for(var i=0;i<16;i++){
                C=this.Left_Circular_Shift(C,shift_table[i]);
                D=this.Left_Circular_Shift(D,shift_table[i]);
                var k=this.Purmuted_Choice2(C+D);
                this.All_round_Key.push(k);
                var R_prev=R;
                R=this.Expansion_Block(R);
                R=this.XOr(R,k);
                R=this.Substitution_box(R);
                R=this.Permutation(R);
                R=this.XOr(R,L);
                L=R_prev;
            }
            var Cipher_text=this.bin2hex(this.final_Permutation(R+L));
            return Cipher_text;
        }
        Decrypt(string){
            var txt_64=this.Initial_Permutation(this.hex2bin_(string));
            var L=txt_64.substr(0,32);
            var R=txt_64.substr(32);
            for(var i=0;i<16;i++){
                var k=this.All_round_Key[15-i];
                var R_prev=R;
                R=this.Expansion_Block(R);
                R=this.XOr(R,k);
                R=this.Substitution_box(R);
                R=this.Permutation(R);
                R=this.XOr(R,L);
                L=R_prev;
            }
            var Plain_text=this.bin2hex(this.final_Permutation(R+L));
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
        var key=$("#Key").val();
        var Decrypted = translate.Encrypt(Encrypt,key);
        $("#Decrypted").val(Decrypted);
    });
    $("#Decrypt").click(function () {
        var Decrypt = $("#Decrypted").val();
        var Encrypted=translate.Decrypt(Decrypt);
        $("#Encrypted").val(Encrypted);
    });
});