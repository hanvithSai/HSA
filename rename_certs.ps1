$certPath = 'H:\H Space\WORK\HSA\public\certificates'
Set-Location $certPath

$renames = @(
    @('AI-Agent-Salesforce-GFG.webp', 'AI Agent Salesforce GFG.webp'),
    @('AWS-AIML-Scholars-Badge.webp', 'AWS AIML Scholars Badge.webp'),
    @('Code-Vippasana-S7.webp', 'Code Vippasana S7.webp'),
    @('Code-Vippasana-S10.webp', 'Code Vippasana S10.webp'),
    @('Code-Vippasana-S11.webp', 'Code Vippasana S11.webp'),
    @('Data-Analytics_PowerBI.webp', 'Data Analytics_PowerBI.webp'),
    @('GDSC-Solution-Challenge-2024-Hackathon.webp', 'GDSC Solution Challenge 2024 Hackathon.webp'),
    @('IBM-AI-Fundamentals.webp', 'IBM AI Fundamentals.webp'),
    @('ICAMADA-IEEE-2024.webp', 'ICAMADA IEEE 2024.webp'),
    @('ICCMA-2025-ML-Paper.webp', 'ICCMA 2025 ML Paper.webp'),
    @('IICPC-CP-2024.webp', 'IICPC CP 2024.webp'),
    @('Intro-GenAI-AWS-Udacity.webp', 'Intro GenAI AWS Udacity.webp'),
    @('Kaggle-5-Day-Gen-AI-Intensive.webp', 'Kaggle 5-Day Gen AI Intensive.webp'),
    @('McKinsey-Forward-Program.webp', 'McKinsey Forward Program.webp'),
    @('MongoDB-GFG.webp', 'MongoDB GFG.webp'),
    @('OCI-2025-AI-Foundations-Associate.webp', 'OCI 2025 AI Foundations Associate.webp'),
    @('OCI-2025-Foundations-Associate.webp', 'OCI 2025 Foundations Associate.webp'),
    @('OCI-2025-Multi-Cloud-Architect.webp', 'OCI 2025 Multi Cloud Architect.webp'),
    @('Product Management Certificate-optimized.webp', 'Product Management Certificate.webp'),
    @("Scaler's CPP Course-optimized.webp", "Scaler's CPP Course.webp"),
    @("Scaler's Python Basics-optimized.webp", "Scaler's Python Basics.webp"),
    @("Scaler's SQL Course-optimized.webp", "Scaler's SQL Course.webp"),
    @("Summer Analytics'25-optimized.webp", "Summer Analytics'25.webp"),
    @('Summer of PM 2025-optimized.webp', 'Summer of PM 2025.webp'),
    @("Summer of PM'25 Case Study-optimized.webp", "Summer of PM'25 Case Study.webp")
)

foreach ($rename in $renames) {
    $oldName = $rename[0]
    $newName = $rename[1]
    $oldPath = Join-Path $certPath $oldName
    
    if (Test-Path $oldPath) {
        Rename-Item -Path $oldPath -NewName $newName -Force
        Write-Host "Renamed: $oldName"
    }
}

Write-Host "Complete!"
