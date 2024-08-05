import mongoose from 'mongoose';

const RigSchema = mongoose.Schema ({

    brand: {

        type: String,
        required: true

    },

    model: {

        type: String,
        required: true

    },

    type: {

        type: String,
        required: true

    },

    frecuencyRange: {

        type: String,
        required: true

    },

    mode: {

        type: String,
        required: true

    },

    powerSupply: {

        type: String,
        required: true

    },

    manufactured: {

        type: String,
        required: true

    },

    img: {

        type: String,
        required: true

    },

})

const Rig = mongoose.model('Rig', RigSchema);

export default Rig;