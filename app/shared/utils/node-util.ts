export class NodeUtil {

    static libExists(name: string): boolean{
        try {
            require.resolve(name);
            return true;
        } catch(e) {
            return false;
        }
    }

}