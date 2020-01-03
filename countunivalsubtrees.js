var countUnivalSubtrees = function(root) {
    let count = 0

    function dfs(node) {
        if (!node) {
            return
        }

        if (isUnival(node, node.val)) {
            count++
        }

        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)

    function isUnival(node, value) {
        if (!node) {
            return true
        }

        if (!node.left && !node.right && node.val === value) {
            return true
        }

        return node.val === value && isUnival(node.left, node.val) && isUnival(node.right, node.val)
    }

    return count
};
