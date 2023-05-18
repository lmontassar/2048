const colors = [
    "#106766",
    "#438bf7",
    "#75df21",
    "#1e91f8",
    "#fb74d2",
    "#691c28",
    "#67a37f",
    "#82826e",
    "#62fb4c",
    "#a25865",
    "#d0f442",
    "#1f3fac",
    "#8afd27",
    "#61b259",
    "#55c14f",
    "#85d996",
    "#ee75dd",
    "#7a1acd",
    "#f11451",
    "#4bb706",
    "#54f699",
    "#61012f",
    "#2ff782",
    "#a514a0",
    "#ec142a",
    "#e50288"
];


game = {
    mat: new Array(),
    score :0 ,
    Reset: function () {
        this.score = 0;
        this.mat = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        T = new Array(4);
        do {
            for (let i = 0; i < 4; i++) {
                T[i] = Math.floor(Math.random() * 4);
            }
        } while ((T[0] == T[2]) && (T[1] == T[3]));
        this.mat[ T[0] ][ T[1] ] = 2;
        this.mat[ T[2] ][ T[3] ] = 2; 
    },
    Add: function () {
        let i,j
        do {
            i = Math.floor(Math.random() * 4);
            j = Math.floor(Math.random() * 4);
        } while (this.mat[i][j] != 0);
        this.mat[i][j] = (Math.floor(Math.random() * 1) + 1) * 2;
    },
    PlaceEmpty: function () {
        for (let i = 0; i < 4; i++) {
            if (this.mat[i].indexOf(0) >= 0) return true;
        }
        return false;
    },
    MoveToLeft: function () {
        let ok = 0;
        for (let i = 0; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                if (this.mat[i][j] != 0) {
                    let k1 = j - 1;
                    let k2 = j;
                    while (k1 >= 0) {
                        if (this.mat[i][k1] == 0) {
                            this.mat[i][k1] = this.mat[i][k2];
                            this.mat[i][k2] = 0;
                            ok = 1;
                        } else if (this.mat[i][k1] == this.mat[i][k2]) {
                            this.mat[i][k1] += this.mat[i][k2];
                            this.score += this.mat[i][k1];
                            this.mat[i][k2] = 0;
                            
                            ok = 1;
                            break;
                        } else if (this.mat[i][k1] != this.mat[i][k2]) {
                            break;
                        }
                        k2--;
                        k1--;
                    }
                }
            }
        }
        if (ok == 1) {
            if (this.PlaceEmpty()) {
                this.Add();
            } else {
                ok = -1;
            }
        }
        return ok;
    },
    MoveToRight: function () {
        let ok = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 2; j >= 0; j-- ) {
                if ( this.mat[i][j] != 0 ) {
                    let k1 = j + 1;
                    let k2 = j;
                    while (k1 <= 3) {
                        if (this.mat[i][k1] == 0) {
                            this.mat[i][k1] = this.mat[i][k2];
                            this.mat[i][k2] = 0;

                            ok = 1;
                        } else if (this.mat[i][k1] == this.mat[i][k2]) {
                            this.mat[i][k1] += this.mat[i][k2];
                            this.score += this.mat[i][k1];
                            this.mat[i][k2] = 0;
                            ok = 1;
                            break;
                        } else if (this.mat[i][k1] != this.mat[i][k2]) {
                            break;
                        }
                        k2++;
                        k1++;
                    }
                }
            }
        }
        if (ok == 1) {
            if (this.PlaceEmpty()) {
                this.Add();
            } else {
                ok = -1;
            }
        }
        return ok;
    },
    
    
    MoveToUp: function () {
        let ok = 0;
        for (let j = 0; j < 4; j++) {
            for (let i = 1; i <= 3; i++ ) {
                if ( this.mat[i][j] != 0 ) {
                    let k1 = i - 1;
                    let k2 = i;
                    while (k1 >= 0) {
                        if (this.mat[k1][j] == 0) {
                            this.mat[k1][j] = this.mat[k2][j];
                            this.mat[k2][j] = 0;
                            ok = 1;
                        } else if (this.mat[k1][j] == this.mat[k2][j]) {
                            this.mat[k1][j] += this.mat[k2][j];
                            this.score +=  this.mat[k1][j];
                            this.mat[k2][j] = 0;
                            ok = 1;
                            break;
                        } else if (this.mat[k1][j] != this.mat[k2][j]) {
                            break;
                        }
                        k2--;
                        k1--;
                    }
                }
            }
        }
        if (ok == 1) {
            if (this.PlaceEmpty()) {
                this.Add();
            } else {
                ok = -1;
            }
        }
        return ok;
    },
    
    MoveToDown: function () {
        let ok = 0;
        for (let j = 0; j < 4; j++) {
            for (let i = 2; i >= 0; i-- ) {
                if ( this.mat[i][j] != 0 ) {
                    let k1 = i + 1;
                    let k2 = i;
                    while (k1 <= 3) {
                        if (this.mat[k1][j] == 0) {
                            this.mat[k1][j] = this.mat[k2][j];
                            this.mat[k2][j] = 0;
                            ok = 1;
                        } else if (this.mat[k1][j] == this.mat[k2][j]) {
                            this.mat[k1][j] += this.mat[k2][j];
                            this.mat[k2][j] = 0;
                            this.score += this.mat[k1][j]
                            ok = 1;
                            break;
                        } else if (this.mat[k1][j] != this.mat[k2][j]) {
                            break;
                        }
                        k2++;
                        k1++;
                    }
                }
            }
        }
        if (ok == 1) {
            if (this.PlaceEmpty()) {
                this.Add();
            } else {
                ok = -1;
            }
        }
        return ok;
    },
    Show: function () {
        line = document.querySelectorAll(".l-numbers"); 
        for( let i=0 ; i < 4 ; i++ ){
            num = line[i].querySelectorAll(".number");
            for(let j = 0 ; j < 4 ; j++){
                if( this.mat[i][j] == 0 ){
                    num[j].textContent = "";
                    num[j].classList.add("b-n");
                }else{
                    num[j].classList.remove("b-n");
                    num[j].textContent = this.mat[i][j];
                }
            }
        }
        document.getElementById("score").textContent = this.score ;
    }
};
    var newGame = Object.create( game );

    function reset(){
        newGame.Reset();
        newGame.Show();
    }
    function check(){ 
        var test = Object.create(game); 
        test.mat = JSON.parse(JSON.stringify(newGame.mat));
        if( test.MoveToLeft() == 0 && test.MoveToRight() == 0 && test.MoveToUp() == 0 && test.MoveToDown() == 0  ){
            alert( ` your score is  ** ${newGame.score}  ** \n You can restar  `);
        }
    }

    window.addEventListener("load",reset);
    document.querySelector(".restart").addEventListener("click",reset);
    
    document.getElementById("up").addEventListener("click",function(){
        check();
        newGame.MoveToUp();
        newGame.Show();

    });
    document.getElementById("down").addEventListener("click",function(){
        check();
        newGame.MoveToDown();
        newGame.Show();
    });
    document.getElementById("right").addEventListener("click",function(){
        check();
        newGame.MoveToRight();
        newGame.Show();
    });
    document.getElementById("left").addEventListener("click",function(){
        check();
        newGame.MoveToLeft();
        newGame.Show();
        
    });

    function handleKeyDown(event) {
        if (event.keyCode === 38 || event.key === 'ArrowUp') {
            check() ;
            newGame.MoveToUp();
            newGame.Show();
            
        } else if (event.keyCode === 40 || event.key === 'ArrowDown') {
            check() ;
            newGame.MoveToDown();
            newGame.Show();
            
        } else if (event.keyCode === 39 || event.key === 'ArrowRight') {
            check() ;
            newGame.MoveToRight();
            newGame.Show();
            
        } else if (event.keyCode === 41 || event.key === 'ArrowLeft') {
            check() ;
            newGame.MoveToLeft();
            newGame.Show();
            
        }
}
    document.addEventListener('keyup', handleKeyDown );
