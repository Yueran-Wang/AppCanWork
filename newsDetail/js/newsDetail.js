(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.window.open({
            name: 'tutorials',
            data: 'tutorials.html',
            aniId: 5,
            type: 0
        });
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});
	
	function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        return undefined;
    }
    
    var item = getQueryVariable("item");

   // 定义新闻数据
    var newsData = {
        '1': {
            title: "OpenAI 发布最新 AI 模型 GPT-4 Turbo，推动 AI 研究进入新纪元",
            content: `OpenAI 最近发布了其最新的 AI 模型 GPT-4 Turbo，这是一款在性能和效率上都有显著提升的模型。GPT-4 Turbo 不仅在处理自然语言任务上更加精准，还降低了运行成本，使得更多的开发者和研究人员能够利用这一强大的工具。
GPT-4 Turbo 的发布，标志着人工智能研究的一个新纪元。该模型基于改进的神经网络架构，提供了更加丰富的知识理解和生成能力。从自动化客服到复杂的数据分析，GPT-4 Turbo 的应用范围更广，效率更高。
此外，OpenAI 强调了他们对 AI 安全和伦理的持续关注。新模型在设计时就加入了更多的安全防护措施，确保 AI 技术的发展能够为社会带来积极的影响。
OpenAI 也在积极推动与其他科技公司和学术机构的合作，以促进 AI 技术的健康发展和应用。随着 AI 技术的进步，我们期待看到更多革命性的变化，为各行各业带来创新的解决方案。`
        },
        '2': {
            title: `"文心一言": 打开自然语言处理的新视角`,
            content: `文心一言是最新发布的 AI 语言模型，由国内领先的 AI 研究团队开发。它不仅在理解和生成自然语言方面取得了突破性进展，而且提供了一种全新的交互方式，使得机器更好地理解人类的语言细微差别。
这款模型通过深度学习和大数据分析，能够精确捕捉到语言中的情感和语境变化，从而在多种应用场景下提供更为准确的响应。文心一言的出现，被认为是自然语言处理领域的一次重大创新，它为文本分析、机器翻译、以及虚拟助手等领域带来了新的可能。
文心一言在多轮对话处理、情感分析和长文本生成方面表现出色。它可以用于编写文章、生成创意内容、或者作为智能助手参与复杂的商务谈判和客服支持。更重要的是，文心一言在处理多语言文本时的能力，使其成为国际化应用的理想选择。
AI 研究社群对文心一言的评价非常高，许多专家预测，这款 AI 模型将在未来几年内，对教育、媒体、娱乐和客户服务等行业产生深远的影响。`
        }
    };

    // 检查item并渲染相应的新闻
    if (newsData[item]) {
        $('#newsTitle').text(newsData[item].title);
        $('#newsContent').text(newsData[item].content);
    } else {
        $('#newsTitle').text("新闻未找到");
        $('#newsContent').text("请求的新闻项没有对应的内容。");
    }

    document.addEventListener('DOMContentLoaded', function () {
        // 获取元素
        var addCommentButton = document.getElementById('addCommentButton');
    
        // 定义静态评论数据
        var commentsData = [
            {
                name: "Alice",
                content: "非常有见地的文章，感谢分享！",
                time: "2023-10-05 14:23"
            }
        ];
    
        // 动态渲染评论
        function renderComments() {
            var commentsHTML = '';
            for (var i = 0; i < commentsData.length; i++) {
                var comment = commentsData[i];
                commentsHTML += '<div class="comment">';
                commentsHTML += '    <div class="comment-name">' + comment.name + '</div>';
                commentsHTML += '    <div class="comment-content">' + comment.content + '</div>';
                commentsHTML += '    <div class="comment-time">' + comment.time + '</div>';
                commentsHTML += '</div>';
            }
            document.getElementById('commentsList').innerHTML = commentsHTML;
        }
    
        renderComments(); // Initial render
    
        // 提交评论功能
        function submitNewComment() {
            var username = appcan.locStorage.val("username"); // 获取用户名
            var commentContent = document.getElementById('commentContent').value;
    
            if (username && commentContent) {
                var newComment = {
                    name: username,
                    content: commentContent,
                    time: new Date().toLocaleString()
                };
                commentsData.push(newComment);
                renderComments();
                document.getElementById('commentContent').value = '';
    
                appcan.window.alert({
                    title: "提示",
                    content: "评论已提交",
                    buttons: ['确定']
                });
            } else {
                appcan.window.alert({
                    title: "提示",
                    content: "请填写评论内容！",
                    buttons: ['确定']
                });
            }
        }
    
        // 事件监听
        addCommentButton.addEventListener('click', submitNewComment);
    });
    
    

})($);