export class UserModel {
    constructor(
        public user: string,
        public pass: string,
        public id?: number,
        public plantel?: string

    ) { }
}
