export default function heartbeat(_req, res) {
    return res
        .status(200)
        .send(
            { status: 200, message: "Successfull" }
        );
}