# NextJS & AWS CDK Full-Stack App

Unlock the power of Next JS and AWS in real-time deployment! This repo accompanies the tutorial where we navigate the CI/CD pipeline to build an AI application using TypeScript. A perfect resource for aspiring full-stack developers.

## Video Tutorial

🎥 [Watch the full tutorial on YouTube](https://youtu.be/6-Z7xJCp-Zw)

### Video Chapters

- [00:00](https://youtu.be/6-Z7xJCp-Zw?t=0) Introduction
- [01:24](https://youtu.be/6-Z7xJCp-Zw?t=84) Setting Up the Application
- [03:43](https://youtu.be/6-Z7xJCp-Zw?t=223) Deploying the CDK Backend
- [08:14](https://youtu.be/6-Z7xJCp-Zw?t=494) Connecting Frontend to Backend
- [11:38](https://youtu.be/6-Z7xJCp-Zw?t=698) Automating Code Generation
- [15:12](https://youtu.be/6-Z7xJCp-Zw?t=912) Deploying the Full App
- [18:34](https://youtu.be/6-Z7xJCp-Zw?t=1114) Testing the Deployed App
- [22:26](https://youtu.be/6-Z7xJCp-Zw?t=1346) Successfully Calling the API
- [24:27](https://youtu.be/6-Z7xJCp-Zw?t=1467) Conclusion

## Repo Structure

- 🖥️ **Root**: Contains the NextJS frontend application.
- 🛠️ **/backend**: Houses the AWS CDK app for backend deployment.

## Installation & Setup

### Pre-requisites

- Make sure you have Node.js and npm installed.
- AWS CLI configured with appropriate permissions.

### Steps

1. **Frontend Setup**

```bash
npm install
npm run dev
```

2. **Backend Setup**

```bash
cd backend
npm install
{update the values in `lib/backend-stack.ts`}
cdk deploy
```

## Usage

Once both frontend and backend setups are done, you can access the NextJS app on `http://localhost:3000` and interact with the AI functionalities backed by AWS resources deployed via CDK.

## Contributions

Feel free to fork the repo and make contributions. Pull requests are welcome!

## License

MIT

---

Happy coding! If you find this resource helpful, consider giving the YouTube video a 👍 and subscribe for more tutorials.
