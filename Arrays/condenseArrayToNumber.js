function condenseArrayToNumber(nums) {

    let condensed = []

    while (nums.length > 1) {
        condensed = [nums.length - 1]
        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = Number(nums[i]) + Number(nums[i + 1])
        }
        nums = condensed
    }
    console.log(nums[0]);
}

condenseArrayToNumber([5, 0, 4, 1, 2])