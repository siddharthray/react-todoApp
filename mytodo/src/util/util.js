export default function updateData(data, subset, prop = "") {
    if (prop === "task") {
        return data.map(item => {
            let res = { ...item };
            if ((res.id - 0) === subset.id) {
                res.task = subset.task
            }
            return res
        })
    } else {
        return data.map(item => {
            let res = { ...item };
            if ((res.id - 0) === subset.id) {
                res.complete = !subset.complete
            }
            return res
        })
    }

}