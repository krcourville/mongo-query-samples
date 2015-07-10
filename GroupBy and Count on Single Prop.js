db.getCollection('node_default').aggregate([
    {
        $group: {
            _id : "$n_t",
            count: { $sum : 1}
        }
    }
])