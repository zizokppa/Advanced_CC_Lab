var choices = [];

// 处理用户选择的函数
function choose(choice) {
    choices.push(choice);
    showNextQuestion();
}

// 显示下一个问题或结果的函数
function showNextQuestion() {
    var questions = document.getElementById("buttonContainer");
    var resultContainer = document.getElementById("resultContainer");

    // 如果用户回答完所有问题
    if (choices.length === 2) {
        // 隐藏问题
        questions.style.display = "none";
        // 显示结果
        resultContainer.style.display = "block";
        // 显示用户的选择
        var resultText = "Your choices: " + choices.join(", ");
        resultContainer.textContent = resultText;
    }
}

var leftButton = document.getElementById("leftButton");

// 添加点击事件监听器
leftButton.addEventListener("click", function() {
    // 在按钮被点击时执行的操作，例如跳转到另一个页面
    window.location.href = "question3.html";
});

var rightButton = document.getElementById("rightButton");

// 添加点击事件监听器
rightButton.addEventListener("click", function() {
    // 在按钮被点击时执行的操作，例如跳转到另一个页面
    window.location.href = "question3.html";
});