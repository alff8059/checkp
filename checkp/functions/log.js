export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, phone, success } = JSON.parse(event.body);

    // Netlify 로그에 찍히는 부분
    console.log(
      `[조회] ${new Date().toISOString()} | 이름: ${name} | 전화: ${phone} | 결과: ${
        success ? "성공" : "실패"
      }`
    );

    return { statusCode: 200, body: "Logged" };
  } catch (err) {
    console.error("로그 저장 에러:", err);
    return { statusCode: 500, body: "Error" };
  }
}
