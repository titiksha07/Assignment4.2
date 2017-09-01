namespace StudentDetails
{
    //creating interface
export interface Student
{
name: string;
id: number;
rollNo: number;
}
//creating function
export function studentDetail(student:Student){
    console.log(`The details of ${student.id} are : 
                 Name: ${student.name} and Roll No: ${student.rollNo}`)
}
};