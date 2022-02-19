export class GeometryCalculator{
    public static availableMethods(obj: any){
        return Object.getOwnPropertyNames(obj).filter(function(property) {
            return typeof obj[property] == "function";
        });
    }
    public static rectangle(a: number, b: number){
        let perimeter = ((2*a)+(2*b)).toFixed(2).toString().replace(".", ",");
        let surface = (a*b).toFixed(2).toString().replace(".", ",");
        let result: string = "Umfang: \t" + perimeter + "\t Fläche:\t" + surface;

        return result
    }
    public static square(a: number){
        let perimeter = (4*a).toFixed(2).toString().replace(".", ",");
        let surface = (Math.pow(a,2)).toFixed(2).toString().replace(".", ",");
        let result: string = "Umfang: \t" + perimeter + "\t Fläche:\t" + surface;

        return result
    }
    public static parallelogram(a: number, b: number, ha: number){
        let perimeter = ((2*a)+(2*b)).toFixed(2).toString().replace(".", ",");
        let surface = (a*ha).toFixed(2).toString().replace(".", ",");
        let result: string = "Umfang: \t" + perimeter + "\t Fläche:\t" + surface;

        return result
    }
    public static cube(a: number){   
        let surface = (6*(Math.pow(a,2))).toFixed(2).toString().replace(".", ",");
        let volume = (Math.pow(a,3)).toFixed(2).toString().replace(".", ",");

        let result: string = "Fläche: \t" + surface + "\t Volumen: \t" + volume;

        return result
    }
    public static cuboid(a: number, b: number, c: number){
        let surface = (2*((a*b)+(a*c)+(b*c))).toFixed(2).toString().replace(".", ",");
        let volume = (a*b*c).toFixed(2).toString().replace(".", ",");

        let result: string = "Fläche: \t" + surface + "\t Volumen: \t" + volume;

        return result
    }
    public static cylinder(r: number, h: number){
        let surface = (2*Math.PI*r*(r+h)).toFixed(2).toString().replace(".", ",");
        let volume = (Math.PI*(r**2)*h).toFixed(2).toString().replace(".", ",");

        let result: string = "Fläche: \t" + surface + "\t Volumen: \t" + volume;

        return result
    }
    public static sphere(r: number){
        let surface = (4*Math.PI*(r**2)).toFixed(2).toString().replace(".", ",");
        let volume = ((4/3)*Math.PI*(r**3)).toFixed(2).toString().replace(".", ",");

        let result: string = "Fläche: \t" + surface + "\t Volumen: \t" + volume;

        return result
    }
}

// console.log(GeometryCalculator.rectangle(4,6))
