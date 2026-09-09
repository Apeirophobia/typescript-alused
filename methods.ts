function function_name(param1: number): number {
    return param1;
}

// function function_name(param: datatype) returnType {
//  return value of returnType;
//}

function concat_two_strings(string1: string, string2: string): string {
    return string1 + string2;
}

console.log(concat_two_strings("Shaun the ", "Sheep"));

function say_my_name(name: string): void {
    console.log(name);
}

function greet(name: string, greeting?: string): string {
    if (greeting === undefined) {
        greeting = "Hello"
    }
    return greeting + " " + name + "!";
}

console.log(greet("Llama", "Howdy"));
