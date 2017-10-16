export class Random {
    
    static allFirstnamesMale: string[] = new Array();
    static allFirstnamesFemale: string[] = new Array();
    static allLastnames: string[] = new Array();
    static allAvatarsMale: string[] = new Array();
    static allAvatarsFemale: string[] = new Array();

    static randomNumber(min: number, max:number): number {
        return Math.floor(Math.random() * (max+1)) + min;
    }

    static randomString(strings: string[]): string {
        
        let n: number = Random.randomNumber(0, strings.length - 1);
        return strings[Random.randomNumber(0, strings.length - 1)];
    }

    static randomLastname(): string {
        return Random.randomString(Random.allLastnames);
    }

    static randomFirstname(genre: string){
        if(genre === 'M'){
            return Random.randomString(Random.allFirstnamesMale);
        }else{
            return Random.randomString(Random.allFirstnamesFemale);
        }
    }

    static randomAvatar(genre: string){
        if(genre === 'M'){
            return Random.randomString(Random.allAvatarsMale);
        }else{
            return Random.randomString(Random.allAvatarsFemale);
        }
    }
}