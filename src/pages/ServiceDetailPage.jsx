import { useParams, Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ProcessFlowCircle from '../components/ProcessFlowCircle'
import RetrievalProcessSteps from '../components/RetrievalProcessSteps'
import ITAutomationDiagram from '../components/ITAutomationDiagram'
import AnimatedServiceCards from '../components/AnimatedServiceCards'
import './ServiceDetailPage.css'

const rcmSteps = [
  'Pre-Registration – Initial patient information gathering before service',
  'Registration – Formal patient enrollment into the system',
  'Charge Capture – Recording of services and procedures provided',
  'Utilization Review – Assessment of medical necessity and appropriateness of care',
  'Coding – Translation of clinical documentation into standardized medical codes',
  'Claim Submission – Sending claims to insurance payers',
  'Remittance Processing – Receiving and recording payments from payers',
  'Follow Up – Managing denied or unpaid claims',
  'Patient Collections – Billing patients for their remaining balances',
]

const servicesConfig = {
  'revenue-cycle-management': {
    title: 'Revenue Cycle Management',
    description:
      'Efficient, compliant, and accurate medical billing and RCM solutions for healthcare providers, billing firms, and hospitals. HIPAA-compliant processes with 99% claim accuracy, reduced AR days & faster reimbursements.',
    extendedContent: {
      sections: [
        {
          heading: 'What is Revenue Cycle Management (RCM)?',
          body: 'Revenue Cycle Management is the process of getting the bills paid for hospitals, doctors, and other healthcare providers. It encompasses all financial processes from patient registration through final payment collection—ensuring that healthcare organizations are reimbursed accurately and on time for the services they deliver.',
        },
        {
          heading: 'The RCM Process: Nine Key Steps',
          body: 'Our team manages the full revenue cycle with precision and compliance:',
          list: rcmSteps,
        },
        {
          heading: 'Why RCM Matters',
          body: 'RCM effectiveness is measured by Accounts Receivable (AR) Days. For a large hospital system, the difference between 30 and 70 AR days can represent hundreds of millions in cash flow impact. Effective RCM improves operational efficiency, strengthens compliance, and optimizes cash flow so you can focus on patient care.',
        },
        {
          heading: 'Why Partner with Unirath for RCM?',
          body: 'We deliver HIPAA-compliant processes with 99% claim accuracy, reduced AR days, and faster reimbursements. Our skilled specialists combine domain expertise with proven workflows to handle pre-authorization, coding, claim submission, denial management, and patient billing—so you get paid faster without sacrificing compliance.',
        },
      ],
    },
  },
  'medical-record-retrieval': {
    title: 'Medical Record Retrieval',
    description:
      'Reliable and secure retrieval of medical records for insurance companies, attorneys, and healthcare networks. Rapid turnaround (24–48 hours) with automated tracking, reporting, and fully HIPAA compliant workflows.',
    extendedContent: {
      sections: [
        {
          heading: 'What is Medical Record Retrieval?',
          body: 'Medical records retrieval is the secure collection, management, and exchange of patient health information between organizations. It serves as the backbone for patient care, compliance, and legal workflows across healthcare, law firms, insurance companies, and other entities. Modern digital workflows have replaced traditional paper-based processes, cutting turnaround times significantly while maintaining HIPAA compliance.',
        },
        {
          heading: 'Our Retrieval Process',
          retrievalTimeline: true,
        },
        {
          heading: 'Speed & Compliance',
          body: 'HIPAA requires covered entities to respond to access requests within 30 calendar days (with one 30-day extension possible if the requestor is notified). We help you meet and beat these expectations: rapid options in 24–48 hours where expedited, automated request processing and real-time tracking keep attorneys and insurers informed. All workflows are HIPAA-compliant, with encryption, patient authorizations, and secure delivery of protected health information.',
        },
        {
          heading: 'Why Partner with Unirath for Medical Record Retrieval?',
          body: 'We deliver rapid turnaround (24–48 hours for expedited requests) with automated tracking and reporting. Our teams combine HIPAA-compliant processes, quality control for complete and organized records, and secure nationwide retrieval so insurance companies, attorneys, and healthcare networks get the documents they need without compliance risk or delay.',
        },
      ],
    },
  },
  'customer-support-services': {
    title: 'Customer Support Services',
    description:
      'Enhance customer experience with our multilingual, round-the-clock support teams. Voice, Email, Chat, Social Media, and Technical Helpdesk services. Trained, English-proficient agents with 24/7 availability aligned with US time zones.',
    extendedContent: {
      sections: [
        {
          heading: 'How we support you',
          animatedCards: true,
          cardItems: [
            { icon: 'voice', label: 'Voice support', body: 'Our voice teams handle inbound and outbound calls with clarity and empathy. Trained, English-proficient agents manage inquiries, escalations, and sales or retention calls—aligned with your scripts, KPIs, and US time zones for 24/7 coverage when you need it.' },
            { icon: 'email', label: 'Email support', body: 'We respond to customer emails promptly and professionally. From ticket triage and templates to personalized replies and follow-up, we keep response times low and satisfaction high while keeping a clear audit trail.' },
            { icon: 'chat', label: 'Chat support', body: 'Live chat and messaging support for websites and apps. Our agents handle concurrent conversations with speed and accuracy, so customers get instant help without long wait times.' },
            { icon: 'social', label: 'Social media support', body: 'We monitor and respond to customers on social channels—comments, DMs, and reviews—so your brand stays responsive and on-message while you focus on strategy and growth.' },
            { icon: 'helpdesk', label: 'Technical helpdesk', body: 'Technical support and helpdesk for products, SaaS, and IT. Our agents troubleshoot issues, guide users through fixes, and escalate when needed, reducing resolution time and improving customer confidence.' },
          ],
        },
        {
          heading: 'Why partner with Unirath for customer support?',
          body: 'We deliver multilingual, 24/7-capable teams with strong English proficiency and training tailored to your products and processes. You get scalable voice, email, chat, social, and helpdesk support aligned with US time zones—so your customers are always covered.',
        },
      ],
    },
  },
  'back-office-administrative-support': {
    title: 'Back-Office & Administrative Support',
    description:
      'Simplify your operations with specialized back-office teams managing critical functions. Data entry, document indexing, claims processing, appointment scheduling, CRM management, and virtual assistant support.',
    extendedContent: {
      sections: [
        {
          heading: 'What we do',
          animatedCards: true,
          cardItems: [
            { icon: 'dataEntry', label: 'Data entry', body: 'Accurate, timely data entry from forms, invoices, surveys, or legacy records into your systems. We follow your validation rules and SLAs so your data stays clean and up to date without tying up your core team.' },
            { icon: 'documents', label: 'Document indexing', body: 'We organize and index documents so they are searchable and retrievable. From medical records and legal files to invoices and contracts, we apply consistent taxonomy and metadata for fast lookup and compliance.' },
            { icon: 'claims', label: 'Claims processing', body: 'We process insurance, warranty, or other claims—data capture, verification, and status updates—so claims move through your workflow quickly and accurately with fewer errors and backlogs.' },
            { icon: 'scheduling', label: 'Appointment scheduling', body: 'We manage appointment booking, reminders, and rescheduling by phone, email, or portal. Our teams keep calendars full, no-shows low, and patients or clients informed.' },
            { icon: 'crm', label: 'CRM management', body: 'We keep your CRM updated: lead and contact data, activity logging, pipeline updates, and reporting. So your sales and success teams have accurate, actionable data without the data-entry burden.' },
            { icon: 'assistant', label: 'Virtual assistant support', body: 'Administrative and operational support—scheduling, travel, research, and routine correspondence—so your executives and teams can focus on high-value work while day-to-day tasks run smoothly.' },
          ],
        },
        {
          heading: 'Why partner with Unirath for back-office support?',
          body: 'We combine process discipline with flexibility. Our back-office teams handle data entry, document indexing, claims, scheduling, CRM, and virtual assistant work with clear SLAs and quality checks—so you scale operations without scaling headcount.',
        },
      ],
    },
  },
  'it-automation-services': {
    title: 'IT & Automation Services',
    description:
      'Digital enablement and automation to help your business work smarter. AI-based workflow automation, CRM/ERP integration, API setup, dashboard creation, reporting tools, and cloud support & maintenance.',
    extendedContent: {
      sections: [
        {
          heading: 'What are IT & Automation Services?',
          body: 'IT & Automation Services combine technology and process design to reduce manual work, cut errors, and scale operations without scaling headcount. From automating repetitive tasks and integrating systems to building dashboards and maintaining cloud infrastructure, we help you run smarter—not harder—so your team can focus on high-value work.',
        },
        {
          heading: 'How It Works',
          automationDiagram: true,
        },
        {
          heading: 'What We Offer',
          body: 'Our team delivers end-to-end digital enablement tailored to your stack and goals:',
          list: [
            'AI-based workflow automation – Design and deploy bots and workflows that handle routine tasks (data entry, approvals, notifications) so your staff can focus on exceptions and strategy.',
            'CRM & ERP integration – Connect Salesforce, HubSpot, Zoho, SAP, or other platforms with your existing tools; sync data, automate lead-to-cash flows, and keep systems in sync.',
            'API development & integration – Build or integrate REST/GraphQL APIs so your applications, partners, and internal systems communicate reliably and securely.',
            'Dashboards & reporting – Custom dashboards (Power BI, Tableau, or custom) and scheduled reports so decision-makers get real-time visibility into KPIs, operations, and revenue.',
            'Cloud support & maintenance – Ongoing monitoring, updates, backup, and optimization for cloud workloads (AWS, Azure, GCP) so your infrastructure stays secure and performant.',
          ],
        },
        {
          heading: 'Why Automation Matters',
          body: 'Manual, repetitive work is costly and error-prone. Automation improves accuracy, speeds up cycle times, and frees your team for customer-facing and strategic work. Whether you are a growing SMB or a larger enterprise, the right mix of workflow automation, integrations, and reporting can reduce operational friction and help you scale without proportional cost increases.',
        },
        {
          heading: 'Why Partner with Unirath for IT & Automation?',
          body: 'We combine technical depth with a practical, business-outcome focus. Our specialists work with your existing tools and processes to design, implement, and maintain automation and integrations that fit your budget and timeline. You get a single partner for strategy, build, and ongoing support—so your systems stay aligned with your business as it grows.',
        },
      ],
    },
  },
  'accounting-services': {
    title: 'Accounting Services',
    description:
      'Comprehensive accounting solutions including bookkeeping, accounts payable/receivable, payroll management, sales tax, financial analysis, Virtual CFO services, and specialized e-commerce accounting.',
    extendedContent: {
      sections: [
        {
          heading: 'Our services',
          animatedCards: true,
          cardItems: [
            { icon: 'bookkeeping', label: 'Bookkeeping Services', body: 'We maintain accurate, up-to-date books so you have a clear picture of your finances. Our team handles day-to-day recording of transactions, journal entries, general ledger maintenance, and month-end close—freeing you to focus on running your business while staying audit-ready.' },
            { icon: 'ap', label: 'Accounts Payable Management', body: 'We manage vendor invoices, payment runs, and approval workflows so bills are paid on time and cash flow is predictable. From invoice capture and coding to payment execution and vendor communication, we keep your AP process efficient and compliant.' },
            { icon: 'ar', label: 'Accounts Receivable Management', body: 'We track what you are owed and help you collect it faster. Our AR services include invoice generation, payment posting, aging reports, and follow-up on overdue accounts—reducing DSO and improving cash flow without straining client relationships.' },
            { icon: 'reconciliation', label: 'Reconciliation', body: 'We reconcile bank accounts, credit cards, and key balance-sheet accounts so your books match reality. Regular reconciliations catch errors early, support audit readiness, and give you confidence in your financial data.' },
            { icon: 'payroll', label: 'Payroll Management', body: 'We handle payroll processing, tax withholdings, and statutory filings so your team gets paid correctly and on time. Our payroll support covers salary and wage processing, benefits deductions, and compliance with local payroll regulations.' },
            { icon: 'inventory', label: 'Inventory Management', body: 'We help you track inventory levels, cost of goods sold, and stock movements so you can optimize ordering and avoid overstock or stockouts. Our support includes inventory valuation, cycle counts, and reporting tailored to your business.' },
            { icon: 'salesTax', label: 'Sales Tax', body: 'We assist with sales tax compliance—registration, calculation, filing, and remittance across jurisdictions where you have nexus. We help you stay current with changing rules and reduce the risk of penalties and interest.' },
            { icon: 'financialAnalysis', label: 'Financial Analysis', body: 'We turn your numbers into insights. Our financial analysis support includes variance analysis, trend reporting, KPIs, and management reports so you can make data-driven decisions about pricing, costs, and growth.' },
            { icon: 'virtualCfo', label: 'Virtual CFO Services', body: 'Get strategic finance leadership without a full-time hire. Our Virtual CFO (vCFO) services provide budgeting, forecasting, cash flow planning, and high-level financial guidance. We act as your part-time finance lead—reviewing performance, advising on funding and M&A, and helping you scale with confidence.' },
            { icon: 'ecommerce', label: 'E-commerce Accounting', body: 'We specialize in the accounting needs of online sellers. From multi-channel sales reconciliation (Amazon, Shopify, and others) and marketplace fees to inventory and COGS tied to e-commerce platforms, we keep your e-commerce books accurate and compliant so you can focus on growing your store.' },
          ],
        },
      ],
    },
  },
}

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = slug ? servicesConfig[slug] : null

  if (!service) {
    return (
      <>
        <section className="service-detail-page">
          <div className="container service-detail-inner">
            <h1 className="service-detail-title">Service not found</h1>
            <Link to="/#services" className="btn btn-primary">
              View all services
            </Link>
          </div>
        </section>
        <Footer />
      </>
    )
  }

  const hasExtended = service.extendedContent

  return (
    <>
      <section className="service-detail-page">
        <div className={`container ${hasExtended ? 'service-detail-inner-full' : 'service-detail-inner'}`}>
          <h1 className="service-detail-title">{service.title}</h1>
          <p className="service-detail-desc">{service.description}</p>

          {hasExtended &&
            service.extendedContent.sections &&
            service.extendedContent.sections.map((sec, idx) => (
              <div key={idx} className="service-detail-section">
                <h2 className="service-detail-section-title">{sec.heading}</h2>
                {sec.retrievalTimeline ? (
                  <RetrievalProcessSteps />
                ) : sec.automationDiagram ? (
                  <ITAutomationDiagram />
                ) : sec.animatedCards && sec.cardItems ? (
                  <AnimatedServiceCards
                    items={sec.cardItems}
                    disableHighlight={slug === 'accounting-services'}
                  />
                ) : (
                  <>
                    {sec.body && (
                      <p className="service-detail-section-body">{sec.body}</p>
                    )}
                    {sec.list &&
                      (slug === 'revenue-cycle-management' ? (
                        <ProcessFlowCircle steps={sec.list} />
                      ) : (
                        <ol className="service-detail-list">
                          {sec.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ol>
                      ))}
                  </>
                )}
              </div>
            ))}

          <Link to="/contact" className="btn btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
