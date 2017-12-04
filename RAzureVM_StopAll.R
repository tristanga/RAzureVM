# Function: RAzureVM_StopAll
# Title: Stop all your VMs in Azure
# Description: Helps users to manage Azure VMs from within a R Session.
# Version: 0.1.1
# Date: 2017-12-03
# Author@R: Tristan G

if(!require("httr")) install.packages("httr")
if(!require("jsonlite")) install.packages("jsonlite")
if(!require("curl")) install.packages("curl")

RAzureVM_StopAll <- function(client_id, client_secret, tenant_id, subscription_id) {
# Work in Progress
}

# Example: RAzureVM_StopAll(client_id, client_secret, tenant_id, subscription_id)
