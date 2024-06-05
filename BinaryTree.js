class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = new TreeNode(20);
        this.root.left = new TreeNode(9);
        this.root.right = new TreeNode(25);
        this.root.left.left = new TreeNode(5);
        this.root.left.right = new TreeNode(12);
    }

    findSuccessor(root, target) {
        let successor = null;
        let currentNode = root;

        while (currentNode) {
            if (target < currentNode.value) {
                successor = currentNode;
                currentNode = currentNode.left;
            }
            
            else if (target > currentNode.value) {
                currentNode = currentNode.right;
            }
            
            else {
                if (currentNode.right) {
                    let temp = currentNode.right;
                    while (temp.left) {
                        temp = temp.left;
                    }
                    successor = temp;
                }
                break;
            }
        }

        return successor ? successor.value : null;
    }
}

let tree = new BinaryTree();

let target = 9;
let successor = tree.findSuccessor(tree.root, target);

if (successor !== null) {
    console.log("El sucesor inorden de " + target + " es: " + successor);
} else {
    console.log("No hay sucesor inorden para " + target);
}