[
    {
        "topic_id": "1",
        "question": {
            "questionContent": "A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection.The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.Which solution meets these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "2",
        "question": {
            "questionContent": "A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture.What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use Amazon Redshift to load all the content into one place and run the SQL queries as needed."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use Amazon Athena directly with Amazon S3 to run the queries as needed."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "3",
        "question": {
            "questionContent": "A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations.Which solution meets these requirements with the LEAST amount of operational overhead?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Add the aws PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3 bucket policy."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "4",
        "question": {
            "questionContent": "An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet.Which solution will provide private network connectivity to Amazon S3?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create a gateway VPC endpoint to the S3 bucket."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an instance profile on Amazon EC2 to allow S3 access."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an Amazon API Gateway API with a private link to access the S3 endpoint."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "5",
        "question": {
            "questionContent": "A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time.What should a solutions architect propose to ensure users see all of their documents at once?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Copy the data so both EBS volumes contain all the documents"
            },
            "B": {
                "choice_image": "",
                "choice_text": "Configure the Application Load Balancer to direct a user to the server with the documents"
            },
            "C": {
                "choice_image": "",
                "choice_text": "Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS"
            },
            "D": {
                "choice_image": "",
                "choice_text": "Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server"
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "6",
        "question": {
            "questionContent": "A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "7",
        "question": {
            "questionContent": "A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability.Which solution meets these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SOS) subscriptions. Configure the consumer applications to process the messages from the queues."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "8",
        "question": {
            "questionContent": "A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability.How should a solutions architect design the architecture to meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "9",
        "question": {
            "questionContent": "A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed.The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an Amazon FSx for Windows File Server file system to extend the company's storage space."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "10",
        "question": {
            "questionContent": "A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use an API Gateway authorizer to block any requests while the application processes an order."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "11",
        "question": {
            "questionContent": "A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management.What should a solutions architect do to accomplish this goal?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use AWS Secrets Manager. Turn on automatic rotation."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use AWS Systems Manager Parameter Store. Turn on automatic rotation."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service (AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "12",
        "question": {
            "questionContent": "A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53.What should a solutions architect do to meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint Configure Route 53 to route traffic to the CloudFront distribution."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "13",
        "question": {
            "questionContent": "A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions.Which solution will meet these requirements with the LEAST operational overhead?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "14",
        "question": {
            "questionContent": "A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance.The database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use Amazon Redshift with a single node for leader and compute functionality."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use Amazon RDS with a Single-AZ deployment Configure Amazon RDS to add reader instances in a different Availability Zone."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use Amazon ElastiCache for Memcached with EC2 Spot Instances."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "15",
        "question": {
            "questionContent": "A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "16",
        "question": {
            "questionContent": "A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "17",
        "question": {
            "questionContent": "A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket.What should the solutions architect do to meet this requirement?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "18",
        "question": {
            "questionContent": "An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket.A solutions architect needs to design a solution that uses durable, stateless components to process the images automatically.Which combination of actions will meet these requirements? (Choose two.)",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function."
            },
            "E": {
                "choice_image": "",
                "choice_text": "Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon ample Notification Service (Amazon SNS) topic with the application owner's email address for further processing."
            }
        },
        "answers": [
            "A",
            "B"
        ]
    },
    {
        "topic_id": "19",
        "question": {
            "questionContent": "A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets.A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server.Which solution will meet these requirements with the LEAST operational overhead?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Deploy a transit gateway in the inspection VPConfigure route tables to route the incoming packets through the transit gateway."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "20",
        "question": {
            "questionContent": "A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS) volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance.A solutions architect needs to minimize the time that is required to clone the production data into the test environment.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "21",
        "question": {
            "questionContent": "An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours.Which solution will meet these requirements with the LEAST operational overhead?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "22",
        "question": {
            "questionContent": "A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files.Which storage option meets these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "S3 Standard"
            },
            "B": {
                "choice_image": "",
                "choice_text": "S3 Intelligent-Tiering"
            },
            "C": {
                "choice_image": "",
                "choice_text": "S3 Standard-Infrequent Access (S3 Standard-IA)"
            },
            "D": {
                "choice_image": "",
                "choice_text": "S3 One Zone-Infrequent Access (S3 One Zone-IA)"
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "23",
        "question": {
            "questionContent": "A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely.Which storage solution will meet these requirements MOST cost-effectively?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Configure S3 Intelligent-Tiering to automatically migrate objects."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "24",
        "question": {
            "questionContent": "A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling.How should the solutions architect generate the information with the LEAST operational overhead?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use AWS Budgets to create a budget report and compare EC2 costs based on instance types."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "25",
        "question": {
            "questionContent": "A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database.During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Change the platform from Aurora to Amazon DynamoDProvision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS)."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "26",
        "question": {
            "questionContent": "A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes.What should a solutions architect do to accomplish this goal?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Turn on AWS Config with the appropriate rules."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Turn on AWS Trusted Advisor with the appropriate checks."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Turn on Amazon Inspector with the appropriate assessment template."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events)."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "27",
        "question": {
            "questionContent": "A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "28",
        "question": {
            "questionContent": "A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "29",
        "question": {
            "questionContent": "A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions.The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB. Create an Amazon CloudFront distribution that uses the latency record as an origin."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB. Deploy an Amazon CloudFront distribution that uses the weighted record as an origin."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "30",
        "question": {
            "questionContent": "A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance.Which solution meets these requirements MOST cost-effectively?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Stop the DB instance when tests are completed. Restart the DB instance when required."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "51",
        "question": {
            "questionContent": "A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning.Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Configure the application to send the data to Amazon Kinesis Data Firehose."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data."
            },
            "E": {
                "choice_image": "",
                "choice_text": "Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email."
            }
        },
        "answers": [
            "B",
            "D"
        ]
    },
    {
        "topic_id": "52",
        "question": {
            "questionContent": "A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically. is highly available, and requires minimum operational overhead.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "53",
        "question": {
            "questionContent": "A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "54",
        "question": {
            "questionContent": "A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files.What should a solutions architect do to meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Migrate all the data to Amazon S3. Set up IAM authentication for users to access files."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "55",
        "question": {
            "questionContent": "A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "56",
        "question": {
            "questionContent": "A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create stage variables in API Gateway with Name=\"Endpoint-URL\" and Value=\"Company Domain Name\" to overwrite the default URL. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM)."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "57",
        "question": {
            "questionContent": "A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort.What should a solutions architect do to meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "58",
        "question": {
            "questionContent": "A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload.What should a solutions architect do to meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use Amazon EC2 instances, and install Docker on the instances."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI)."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "59",
        "question": {
            "questionContent": "A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day.What should a solutions architect do to transmit and process the clickstream data?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket. run an AWS Lambda function to process the data for analysis."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "60",
        "question": {
            "questionContent": "A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS.What should a solutions architect do to meet this requirement?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Update the ALB's network ACL to accept only HTTPS traffic."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create a rule that replaces the HTTP in the URL with HTTPS."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create a listener rule on the ALB to redirect HTTP traffic to HTTPS."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI)."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "61",
        "question": {
            "questionContent": "A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis.Which solution will meet these requirements with the LEAST operational overhead?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "62",
        "question": {
            "questionContent": "A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires.What should a solutions architect do to meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALUse the managed renewal feature to automatically rotate the certificate."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "63",
        "question": {
            "questionContent": "A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document management application. The company intends to create a product that converts large .pdf files to .jpg image files. The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time.Which solution meets these requirements MOST cost-effectively?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert the files to .jpg format and store them back in Amazon S3."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Save the .pdf files to Amazon DynamoDUse the DynamoDB Streams feature to invoke an AWS Lambda function to convert the files to .jpg format and store them back in DynamoDB."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "64",
        "question": {
            "questionContent": "A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day.The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS.What should a solutions architect do to meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway. depending on each workload's location."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "65",
        "question": {
            "questionContent": "A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports.Which solution will meet these requirements with the LEAST operational overhead?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "66",
        "question": {
            "questionContent": "A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days.Which storage solution is MOST cost-effective?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "67",
        "question": {
            "questionContent": "A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages.What should a solutions architect do to ensure messages are being processed once only?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use the CreateQueue API call to create a new queue."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use the AddPermission API call to add appropriate permissions."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use the ReceiveMessage API call to set an appropriate wait time."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use the ChangeMessageVisibility API call to increase the visibility timeout."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "68",
        "question": {
            "questionContent": "A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The company needs to minimize costs and is willing to accept slower traffic if the primary connection fails.What should the solutions architect do to meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "69",
        "question": {
            "questionContent": "A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone. The company wants the application to be highly available with minimum downtime and minimum loss of data.Which solution will meet these requirements with the LEAST operational effort?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "70",
        "question": {
            "questionContent": "A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service.The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual restart of the EC2 instances that run the web service. The company needs to improve the application's availability without writing custom scripts or code.What should a solutions architect do to meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Enable HTTP health checks on the NLB, supplying the URL of the company's application."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are detected. the application will restart."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an Amazon Cloud Watch alarm that monitors the UnhealthyHostCount metric for the NLB. Configure an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "71",
        "question": {
            "questionContent": "A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour.What should the solutions architect recommend to meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "72",
        "question": {
            "questionContent": "A company runs a photo processing application that needs to frequently upload and download pictures from Amazon S3 buckets that are located in the same AWS Region. A solutions architect has noticed an increased cost in data transfer fees and needs to implement a solution to reduce these costs.How can the solutions architect meet this requirement?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through it."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Deploy a NAT gateway into a public subnet and attach an endpoint policy that allows access to the S3 buckets."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Deploy the application into a public subnet and allow it to route through an internet gateway to access the S3 buckets."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "73",
        "question": {
            "questionContent": "A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC. A solutions architect needs to connect from the on-premises network, through the company's internet connection, to the bastion host, and to the application servers. The solutions architect must make sure that the security groups of all the EC2 instances will allow that access.Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Replace the current security group of the bastion host with one that only allows inbound access from the application instances."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Replace the current security group of the bastion host with one that only allows inbound access from the internal IP range for the company."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Replace the current security group of the bastion host with one that only allows inbound access from the external IP range for the company."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Replace the current security group of the application instances with one that allows inbound SSH access from only the private IP address of the bastion host."
            },
            "E": {
                "choice_image": "",
                "choice_text": "Replace the current security group of the application instances with one that allows inbound SSH access from only the public IP address of the bastion host."
            }
        },
        "answers": [
            "C",
            "D"
        ]
    },
    {
        "topic_id": "74",
        "question": {
            "questionContent": "A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company.How should security groups be configured in this situation? (Choose two.)",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier."
            },
            "E": {
                "choice_image": "",
                "choice_text": "Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier."
            }
        },
        "answers": [
            "A",
            "C"
        ]
    },
    {
        "topic_id": "75",
        "question": {
            "questionContent": "A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the application's performance. The application consists of application tiers that communicate with each other by way of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must design a solution that resolves these issues and modernizes the application.Which solution meets these requirements and is the MOST operationally efficient?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use Amazon CloudWatch metrics to analyze the application performance history to determine the servers' peak utilization during the performance failures. Increase the size of the application server's Amazon EC2 instances to meet the peak requirements."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use Amazon Simple Notification Service (Amazon SNS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length and scale up and down as required."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length and scale up when communication failures are detected."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "76",
        "question": {
            "questionContent": "A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The data consists of JSON files stored on a storage area network (SAN) in an on-premises data center located within the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional systems that provide critical near-real-time analytics. A secure transfer is important because the data is considered sensitive.Which solution offers the MOST reliable data transfer?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "AWS DataSync over public internet"
            },
            "B": {
                "choice_image": "",
                "choice_text": "AWS DataSync over AWS Direct Connect"
            },
            "C": {
                "choice_image": "",
                "choice_text": "AWS Database Migration Service (AWS DMS) over public internet"
            },
            "D": {
                "choice_image": "",
                "choice_text": "AWS Database Migration Service (AWS DMS) over AWS Direct Connect"
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "77",
        "question": {
            "questionContent": "A company needs to configure a real-time data ingestion architecture for its application. The company needs an API, a process that transforms data as the data is streamed, and a storage solution for the data.Which solution will meet these requirements with the LEAST operational overhead?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform the data. Use AWS Glue to send the data to Amazon S3."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "78",
        "question": {
            "questionContent": "A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data for 7 years.What is the MOST operationally efficient solution that meets these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use DynamoDB point-in-time recovery to back up the table continuously."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use AWS Backup to create backup schedules and retention policies for the table."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "79",
        "question": {
            "questionContent": "A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be unpredictable. When traffic spikes occur, they will happen very quickly.What should a solutions architect recommend?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create a DynamoDB table in on-demand capacity mode."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create a DynamoDB table with a global secondary index."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create a DynamoDB table with provisioned capacity and auto scaling."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create a DynamoDB table in provisioned capacity mode, and configure it as a global table."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "80",
        "question": {
            "questionContent": "A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs ta share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt EBS volume snapshots.What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Make the encrypted AMI and snapshots publicly available. Modify the key policy to allow the MSP Partner's AWS account to use the key."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to allow the MSP Partner's AWS account to use the key."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to trust a new KMS key that is owned by the MSP Partner for encryption."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account, Encrypt the S3 bucket with a new KMS key that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "81",
        "question": {
            "questionContent": "A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel while adding and removing application nodes as needed based on the number of jobs to be processed. The processor application is stateless. The solutions architect must ensure that the application is loosely coupled and the job items are durably stored.Which design should the solutions architect use?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "82",
        "question": {
            "questionContent": "A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate.What should a solutions architect recommend to meet this requirement?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS)."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS)."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "83",
        "question": {
            "questionContent": "A company's dynamic website is hosted using on-premises servers in the United States. The company is launching its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must remain in the United States. The product is being launched in a few days, and an immediate solution is needed.What should the solutions architect recommend?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Launch an Amazon EC2 instance in us-east-1 and migrate the site to it."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Move the website to Amazon S3. Use Cross-Region Replication between Regions."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use Amazon CloudFront with a custom origin pointing to the on-premises servers."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use an Amazon Route 53 geoproximity routing policy pointing to on-premises servers."
            }
        },
        "answers": [
            "C"
        ]
    },
    {
        "topic_id": "84",
        "question": {
            "questionContent": "A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2 instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours.The production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours each day. The company plans to implement automation to stop the development and test EC2 instances when they are not in use.Which EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development and test EC2 instances."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test EC2 instances."
            }
        },
        "answers": [
            "B"
        ]
    },
    {
        "topic_id": "85",
        "question": {
            "questionContent": "A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement. new documents cannot be modified or deleted after they are stored.What should a solutions architect do to meet this requirement?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in read-only mode."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "86",
        "question": {
            "questionContent": "A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently.Which solution meets these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "87",
        "question": {
            "questionContent": "A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the event.A solutions architect needs to design a solution that stores customer data that is created during database upgrades.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database."
            }
        },
        "answers": [
            "D"
        ]
    },
    {
        "topic_id": "88",
        "question": {
            "questionContent": "A survey company has gathered data for several years from areas in the United States. The company hosts the data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as low as possible.Which solution will meet these requirements?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Configure the Requester Pays feature on the company's S3 bucket."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3 buckets."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Configure cross-account access for the marketing firm so that the marketing firm has access to the company's S3 bucket."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing firm's S3 buckets."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "89",
        "question": {
            "questionContent": "A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution.What should a solutions architect do to secure the audit documents?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Enable the versioning and MFA Delete features on the S3 bucket."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3:DeleteObject action during audit dates."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key."
            }
        },
        "answers": [
            "A"
        ]
    },
    {
        "topic_id": "90",
        "question": {
            "questionContent": "A company is using a SQL database to store movie data that is publicly accessible. The database runs on an Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of new movies that have been added to the database. The script must report a final total during business hours.The company's development team notices that the database performance is inadequate for development tasks when the script is running. A solutions architect must recommend a solution to resolve this issue.Which solution will meet this requirement with the LEAST operational overhead?",
            "questionImage": ""
        },
        "choices": {
            "A": {
                "choice_image": "",
                "choice_text": "Modify the DB instance to be a Multi-AZ deployment."
            },
            "B": {
                "choice_image": "",
                "choice_text": "Create a read replica of the database. Configure the script to query only the read replica."
            },
            "C": {
                "choice_image": "",
                "choice_text": "Instruct the development team to manually export the entries in the database at the end of each day."
            },
            "D": {
                "choice_image": "",
                "choice_text": "Use Amazon ElastiCache to cache the common queries that the script runs against the database."
            }
        },
        "answers": [
            "B"
        ]
    }]