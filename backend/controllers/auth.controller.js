export function auth(req, res, next) {
    const token = req.header.Authorization;
    const decoded = jwt.verify(token, SECTRET_KEY);
    const username = decoded.username;

    if (users.find((user) => user.username === username)) {
        res.body.username = username;
        next();
    } else {
        res.status(403).send({ message: "You are not authorized" });
    }

}