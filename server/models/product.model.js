const mongoose = require('mongoose');
const standardErrMsg = 'A {PATH} is needed.';

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, standardErrMsg ],
            minlength: [3, '{PATH} must be at least {MINLENGTH} charaters long.' ]
        },

        price: {
            type: Number,
            required: [ true, standardErrMsg ],
            min: [1, '{PATH} must have a value greater that 1' ],
            max: [10000, 'We do not manage any products over 10k' ]
        },

        description: {
            type: String,
            required: [true, standardErrMsg],
            minlength: [10, '{PATH} must be {MINLENGTH} characters long.' ]
        }
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;