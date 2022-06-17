// Debug the code as per the given output
// Output should be
// max-length
// no-amd
// prefer-arrow-functions


const result = {
    success: ["max-length", "no-amd" ,"prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
 
 
const success=result.success
for(const value in success){
  console.log(success[value])
}
