var ArrayDs = /** @class */ (function () {
    function ArrayDs() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.length = args.length; // Initialize the length of the array to track its size.
        this.data = {}; // Initialize the data object to store the items.
        for (var i = 0; i < args.length; i++) { // fill the data object with the given items.
            this.data[i] = args[i];
        }
    }
    // *********************************************************************************************************************
    //  ACCESS METHODS or GETTERS
    // *********************************************************************************************************************
    // Get the item at the given index with:
    // Time complexity of O(1) - constant time (direct object property access)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.get = function (index) {
        // Check if the index is out of bounds
        if (index < 0 || index >= this.length) {
            console.log("".concat(index, " is out of range"));
            return;
        }
        // Return the item at the given index
        console.log("Item at ".concat(index, " index is"), this.data[index]);
        return this.data[index];
    };
    // Get the item at the first index with:
    // Time complexity of O(1) - constant time (direct object property access)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.first = function () {
        // Check if there is any item to get
        if (this.length === 0) {
            console.log('No item to get');
            return;
        }
        // Return the first item
        console.log('First item is', this.data[0]);
        return this.data[0];
    };
    // Get the item at the last index with:
    // Time complexity of O(1) - constant time (direct object property access)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.last = function () {
        // Check if there is any item to get
        if (this.length === 0) {
            console.log('No item to get');
            return;
        }
        // Return the last item
        console.log('Last item is', this.data[this.length - 1]);
        return this.data[this.length - 1];
    };
    // Get the item at the middle index with:
    // Time complexity of O(1) - constant time (direct object property access)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.middle = function () {
        // Check if there is any item to get
        if (this.length === 0) {
            console.log('No item to get');
            return;
        }
        // Return the middle item
        console.log('Middle item is', this.data[Math.floor(this.length / 2)]);
        return this.data[Math.floor(this.length / 2)];
    };
    // Get the index of the given item with:
    // Time complexity of O(n) - linear time (iterating over the array)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.indexOf = function (item) {
        // Check if there is any item to find
        if (this.length === 0) {
            console.log('No item to find');
            return;
        }
        // Find the index of the given item
        for (var i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                console.log("Index of ".concat(item, " is"), i);
                return i;
            }
        }
        console.log("".concat(item, " not found"));
        return -1;
    };
    // Get the last index of the given item with:
    // Time complexity of O(n) - linear time (iterating over the array)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.lastIndexOf = function (item) {
        // Check if there is any item to find
        if (this.length === 0) {
            console.log('No item to find');
            return;
        }
        // Find the last index of the given item
        for (var i = this.length - 1; i >= 0; i--) {
            if (this.data[i] === item) {
                console.log("Last index of ".concat(item, " is"), i);
                return i;
            }
        }
        console.log("".concat(item, " not found"));
        return -1;
    };
    // *********************************************************************************************************************
    //  INSERTION METHODS
    // *********************************************************************************************************************
    // Add the item at the end of the array with:
    // Time complexity of O(1) - constant time (appending to the end)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.push = function () {
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        // Check if there is any item to add
        if (item.length === 0) {
            console.log('No item to add');
            return;
        }
        // Add the item at the end of the array
        for (var i = 0; i < item.length; i++) {
            this.data[this.length] = item[i];
            this.length++;
        }
        console.log("Item added at ".concat(this.length - 1, " index"));
        return this.length;
    };
    // Remove the item from the end of the array with:
    // Time complexity of O(1) - constant time (removing from the end)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.pop = function () {
        if (this.length === 0) {
            console.log('No item to delete');
            return;
        }
        var lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        console.log('Last item deleted', lastItem);
        return lastItem;
    };
    // Remove the item from the given index with:
    // Time complexity of O(n) - linear time (shifting elements after the index)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.delete = function (index) {
        // Check if there is any item to delete
        if (index < 0 || index >= this.length) {
            console.log("Index ".concat(index, " is out of bounds."));
            return undefined;
        }
        // Delete the item at the given index
        var item = this.data[index];
        for (var i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        console.log("Item deleted at index ".concat(index, ":"), item);
        return item;
    };
    // Delete items from the first index with: shift
    // Time complexity of O(n) - linear time (shifting elements after the first index)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.shift = function () {
        // Check if there is any item to delete
        if (this.length === 0) {
            console.log('No item to delete');
            return;
        }
        // Delete the first item
        var firstItem = this.data[0];
        for (var i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        console.log('First item deleted', firstItem);
        return firstItem;
    };
    // Add the item at the first index with: unshift
    // Time complexity of O(n) - linear time (shifting elements to make space)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.unshift = function () {
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        // Check if there is any item to add
        if (item.length === 0) {
            console.log('No item to add');
            return;
        }
        // Shift the elements to make space for the new item
        for (var i = this.length - 1; i >= 0; i--) {
            this.data[i + item.length] = this.data[i];
        }
        // Add the new item at the first index
        for (var i = 0; i < item.length; i++) {
            this.data[i] = item[i];
        }
        this.length += item.length;
        console.log('Item added at 0 index');
        return this.length;
    };
    // *********************************************************************************************************************
    //  SEARCH METHODS
    // *********************************************************************************************************************
    // Find the item with the given value with: find
    // Time complexity of O(n) - linear time (iterating over the array)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.find = function (value) {
        // Check if there is any item to find
        if (this.length === 0) {
            console.log('No item to find');
            return;
        }
        // Find the item with the given value
        for (var i = 0; i < this.length; i++) {
            if (this.data[i] === value) {
                console.log("".concat(value, " found at index ").concat(i));
                return i;
            }
        }
        console.log("".concat(value, " not found"));
        return -1;
    };
    // Check the item with the given value with: includes
    // Time complexity of O(n) - linear time (iterating over the array)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.includes = function (value) {
        // Check if there is any item to find
        if (this.length === 0) {
            console.log('No item to find');
            return;
        }
        // Check the item with the given value
        for (var i = 0; i < this.length; i++) {
            if (this.data[i] === value) {
                console.log("".concat(value, " found at index ").concat(i));
                return true;
            }
        }
        console.log("".concat(value, " not found"));
        return false;
    };
    // *********************************************************************************************************************
    //  SORT METHODS
    // *********************************************************************************************************************
    // Sort the array with: Bubble Sort
    // Time complexity of O(n^2) - quadratic time (nested loop)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.bubbleSort = function () {
        // Check if there is any item to sort
        if (this.length === 0) {
            console.log('No item to sort');
            return;
        }
        // Sort the array
        for (var i = 0; i < this.length; i++) { // Outer loop
            for (var j = 0; j < (this.length - i - 1); j++) { // Inner loop (decreasing the number of iterations)
                if (this.data[j] > this.data[j + 1]) { // Compare
                    var temp = this.data[j]; // Temporary variable
                    this.data[j] = this.data[j + 1]; // Swap
                    this.data[j + 1] = temp; // Swap
                }
            }
        }
        console.log('Array sorted with bubble sort');
        return this.data;
    };
    // sort the array with: Selection Sort
    // Time complexity of O(n^2) - quadratic time (nested loop)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.selectionSort = function () {
        // Check if there is any item to sort
        if (this.length === 0) {
            console.log('No item to sort');
            return;
        }
        // Sort the array
        for (var i = 0; i < this.length; i++) { // Outer loop
            var min = i; // Set the minimum index
            for (var j = i + 1; j < this.length; j++) { // Inner loop
                if (this.data[j] < this.data[min]) { // Compare
                    min = j; // Update the minimum index
                }
            }
            if (i !== min) { // Swap
                var temp = this.data[i];
                this.data[i] = this.data[min];
                this.data[min] = temp;
            }
        }
        console.log('Array sorted with selection sort');
        return this.data;
    };
    // sort the array with: Insertion Sort
    // Time complexity of O(n^2) - quadratic time (nested loop)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.insertionSort = function () {
        // Check if there is any item to sort
        if (this.length === 0) {
            console.log('No item to sort');
            return;
        }
        // Sort the array
        for (var i = 1; i < this.length; i++) { // Outer loop
            var current = this.data[i]; // Current item
            var j = i - 1; // Previous item
            while (j >= 0 && this.data[j] > current) { // Compare
                this.data[j + 1] = this.data[j]; // Shift
                j--;
            }
            this.data[j + 1] = current; // Insert
        }
        console.log('Array sorted with insertion sort');
        return this.data;
    };
    // *********************************************************************************************************************
    //  UTILITY METHODS
    // *********************************************************************************************************************
    // Reverse the array with: reverse
    // Time complexity of O(n) - linear time (iterating over the array)
    // Space complexity of O(1) - constant space
    ArrayDs.prototype.reverse = function () {
        // Check if there is any item to reverse
        if (this.length === 0) {
            console.log('No item to reverse');
            return;
        }
        // Reverse the array
        var start = 0;
        var end = this.length - 1;
        while (start < end) {
            var temp = this.data[start];
            this.data[start] = this.data[end];
            this.data[end] = temp;
            start++;
            end--;
        }
        console.log('Array reversed');
        return this.data;
    };
    return ArrayDs;
}());
var array1 = new ArrayDs();
var array2 = new ArrayDs(45, 65, 85, 98, 45, 102, 76, 85, 78, 11, 20, 31, 10);
var array3 = new ArrayDs(75, 65, 85, 98, 45, 102, 76, 85, 78, 11, 20, 31, 10, 1, 49, 2, 6, 3, 5, 9, 6, 8, 21, 10);
var array4 = new ArrayDs(89, 45, 65, 85, 98, 45, 102, 76, 85, 78, 11, 20, 31, 10, 1, 49, 2, 6, 3, 5, 9, 6, 8, 21, 10, 1, 49, 2, 6, 3, 5, 9, 6, 8, 21, 10, 1, 49, 2, 6, 3, 5, 9, 6, 8, 21, 10, 1, 49, 2, 6, 3, 5, 9, 6, 8, 21, 10, 1, 49, 2, 6, 3, 5, 9, 6, 8, 21, 10, 1, 49, 2, 6, 3, 5, 9, 6, 8, 21, 10);
console.log(array1.push(1, 49, 2, 6, 3, 5, 9, 6, 8, 21, 10));
console.log(array1.get(2));
console.log(array1.pop());
console.log(array1.delete(3));
console.log(array1);
console.log(array1.shift());
console.log(array1.unshift(1, 2, 3));
console.log(array1);
console.log(array1.find(2));
console.log(array1.includes(2));
console.log(array1.bubbleSort());
console.log(array2.selectionSort());
console.log(array4.insertionSort());
console.log(array3.insertionSort());
console.log(array1.reverse());
console.log(array1);
console.log(array1.get(2));
console.log(array1.first());
console.log(array1.last());
console.log(array1.middle());
console.log(array1.indexOf(2));
console.log(array1.lastIndexOf(2));
console.log(array1);
