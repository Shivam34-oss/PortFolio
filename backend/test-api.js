import axios from 'axios';

const API_URL = 'http://localhost:5000/api/chat';

async function testAPI() {
  try {
    console.log('🧪 Testing Portfolio Chat API...\n');

    // Test 1: Health Check
    console.log('Test 1: Health Check');
    const healthRes = await axios.get('http://localhost:5000/');
    console.log('✅ Server Status:', healthRes.data.message);
    console.log();

    // Test 2: Send Chat Message
    console.log('Test 2: Send Chat Message');
    const chatRes = await axios.post(`${API_URL}/message`, {
      message: 'How can I improve my portfolio?'
    });
    console.log('✅ AI Response:', chatRes.data.reply);
    console.log('   Chat ID:', chatRes.data.chatId);
    console.log();

    // Test 3: Get Chat History
    console.log('Test 3: Get Chat History');
    const historyRes = await axios.get(`${API_URL}/history?limit=5`);
    console.log('✅ Chat History Retrieved');
    console.log('   Total Messages:', historyRes.data.count);
    historyRes.data.data.forEach((msg, idx) => {
      console.log(`   [${idx + 1}] User: "${msg.userMessage.substring(0, 40)}..."`);
    });
    console.log();

    // Test 4: Multiple Messages
    console.log('Test 4: Multiple Test Messages');
    const testMessages = [
      'What are the best technologies for web development?',
      'How should I structure my projects section?',
      'Contact me through the website'
    ];

    for (const msg of testMessages) {
      const res = await axios.post(`${API_URL}/message`, { message: msg });
      console.log(`✅ "${msg}"`);
      console.log(`   Response: "${res.data.reply.substring(0, 60)}..."`);
    }
    console.log();

    // Final Summary
    const finalHistory = await axios.get(`${API_URL}/history`);
    console.log('📊 Final Summary:');
    console.log(`✅ Total chats in database: ${finalHistory.data.count}`);
    console.log('✅ All tests passed! API is working correctly.\n');

  } catch (error) {
    console.error('❌ Test Failed:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

testAPI();
