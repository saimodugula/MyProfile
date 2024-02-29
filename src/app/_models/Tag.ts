export class Tag{
static readonly ANGULAR = new Tag('Angular','red');
static readonly Selenium = new Tag('Selenium','orange');
static readonly JAVA = new Tag('Java','pink');
static readonly CYPRESS = new Tag('Cypress','white');
static readonly TESTNG = new Tag('TestNG','black');
static readonly SPRINGBOOT = new Tag('SprinBoot','yellow');
static readonly SQL = new Tag('Sql','blue');
static readonly CUCUMBER = new Tag('Cucumber','darkgreen');
static readonly NODEJS = new Tag('NodeJS','green');

    private constructor(private readonly key: string, public readonly color: string){}


toString() {
    return this.key;
}
}